// Nuxt adapter for Rolldown's `experimental.buildCache` (lab copy of what would live
// in Nuxt). Env switches:
//   EXP_RD_CACHE=<dir>   keep each Vite environment's build cache in <dir>/<env>
//   EXP_RD_INVALIDATE    extra comma list of absolute files to treat as changed
//   EXP_RD_INVALIDATE_FILE  the same, one path per line in a file
//   EXP_RD_SKIP=0        don't skip unchanged environments (see "Environment skip" below)
//   EXP_RD_TYPES=0       don't restore generated type files (see "Generated types" below)
//
// Rolldown sees file contents and `addWatchFile` deps. It can't see two Nuxt inputs:
// - options and layer configs that change how every module is transformed: they go in `key`;
// - the component and auto-import registries: a file that mentions a name whose resolution
//   changed (added, removed, overridden by another layer) goes in `invalidate`.
import { execFileSync, spawn } from 'node:child_process'
import { createHash, randomUUID } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Worker } from 'node:worker_threads'
import { depHash } from './dep-hash.mjs'
import { makeRecord, recordMatches, sameScan, scan, SKIP_DIRS } from './files.mjs'
import type { Plugin } from 'vite'

const LOCKFILES = ['pnpm-lock.yaml', 'package-lock.json', 'yarn.lock', 'bun.lock', 'node_modules/.modules.yaml']
const SOURCE_RE = /\.(?:vue|[cm]?[jt]sx?)$/

const stable = (value: unknown) => JSON.stringify(value, (_k, v) => typeof v === 'function' ? `fn:${String(v)}` : v instanceof RegExp ? `re:${v}` : v)
// `stable` for resolved configs: cycles and the listed keys are cut.
function stableConfig (value: unknown, omit: Set<string>) {
  const seen = new WeakSet()
  return JSON.stringify(value, (k, v) => {
    if (omit.has(k)) return undefined
    if (typeof v === 'function') return `fn:${String(v)}`
    if (v instanceof RegExp) return `re:${v}`
    if (v && typeof v === 'object') { if (seen.has(v)) return '[cycle]'; seen.add(v) }
    return v
  })
}
const lockFiles = (o: any) => [...new Set([o.rootDir, o.workspaceDir])].flatMap(d => LOCKFILES.map(f => join(d, f))).filter(existsSync)
const sha = (s: string | Buffer) => createHash('sha256').update(s).digest('hex')

// A name's candidates in priority order, without Nuxt's layer priority numbers, which change
// whenever a layer is added even if the name still resolves to the same file.
const byPriority = (candidates: Array<[number, string]>) =>
  candidates.sort((a, b) => b[0] - a[0] || (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0)).map(c => c[1]).join('|')

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase()

function* sourceFiles (dir: string): Generator<string> {
  if (!existsSync(dir)) return
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) yield* sourceFiles(join(dir, e.name)) }
    else if (SOURCE_RE.test(e.name)) yield join(dir, e.name)
  }
}

interface State { key: string, invalidate: string[] }

// Environment skip. When nothing the client and SSR builds read has changed, their outputs are
// the previous ones: restore them and mark both environments built, as Nuxt's own `buildCache`
// does for the client, but keyed on every input instead of a glob and covering SSR too. Saved:
// the client's public files, the SSR output, Nuxt's client build state and build outputs.
// Generated types. `nuxt build` empties .nuxt, so `ensureGeneratedTsConfigs` runs `writeTypes`
// (about 0.8 s on big3) on every build although bundling never reads its output. When the key and
// the files the types can depend on are unchanged, the files it wrote last time are linked back
// before `build()` starts, and it skips. The registries that the type files list come from those
// same files and options.
const TYPE_FILES = /^(tsconfig[\w.]*\.json|[\w.]+\.d\.ts)$/
// Component `.vue` content is left out: the type files list components by path
// (`typeof import(...)`). Page and layout `.vue` files count, since route meta can name routes.
const TYPE_CONTENT_EXEMPT = /\.vue$/
const TYPE_CONTENT_KEPT = /[\\/](pages|layouts)[\\/]/
const typesContent = (f: string) => !TYPE_CONTENT_EXEMPT.test(f) || TYPE_CONTENT_KEPT.test(f)
// What the generated types depend on besides the files (compared through `files.mjs` records).
function typesExtra (o: any): string {
  const h = createHash('sha256')
  const { vue, experimental, features, future, imports, components, typescript, buildId } = o
  h.update(stable({ vue, experimental, features, future, imports, components, typescript, buildId, env: Object.entries(process.env).filter(([k]) => /^(EXP_(?!RD_)|NUXT_|NITRO_|VITE_|NODE_ENV)/.test(k)).sort() }))
  for (const f of lockFiles(o)) h.update(f).update(readFileSync(f))
  return h.digest('hex')
}
const DIGEST_WORKER = join(dirname(fileURLToPath(import.meta.url)), 'digest-worker.mjs')

interface SkipState { record: any, envConfig: string, clientState: Record<string, unknown>, buildOutputs: Record<string, string>, serverEntry?: string }

// Resolved environment configs, minus what can't change output or changes every build: `define`
// values that come from env vars and options that only exist after config resolution land here.
const ENV_CONFIG_OMIT = new Set(['plugins', 'logger', 'inlineConfig', 'buildCache', 'configFileDependencies', 'getSortedPlugins', 'getSortedPluginHooks', 'createResolver', 'fsDenyGlob', 'safeModulePaths', 'environments', 'webSocketToken', 'rawBase'])
const envConfigs = (builder: any) => stableConfig([builder.config, ...Object.keys(builder.environments).sort().map(name => [name, builder.environments[name].config])], ENV_CONFIG_OMIT)
const envConfigHash = (builder: any) => sha(envConfigs(builder))
const EXTERNAL_DEPS = join(dirname(fileURLToPath(import.meta.url)), 'external-deps.mjs')
// Every file in the saved external-deps list still has its saved content hash (a dependency that
// can't be followed, such as an unreadable tsconfig, declines the skip).
function externalDepsMatch (file: string) {
  if (!existsSync(file)) return false
  try {
    for (const [p, h] of Object.entries(JSON.parse(readFileSync(file, 'utf8')) as Record<string, string | null>)) {
      if (depHash(p) !== h) return false
    }
  } catch {
    return false
  }
  return true
}

export function snapshot () {
  const dir = process.env.EXP_RD_CACHE
  let state: State | undefined
  let registry: Record<string, string> = {}
  const skipEnabled = process.env.EXP_RD_SKIP !== '0'
  let skip: SkipState | undefined
  let envConfig: string | undefined
  let nuxtRef: any
  const skipDir = dir && join(dir, 'skip')
  const paths = (o: any) => ({ publicDir: join(o.rootDir, '.output/public'), ssrDir: join(o.buildDir, 'vite/services/ssr'), serverDir: join(o.rootDir, '.output/server'), nitroJson: join(o.rootDir, '.output/nitro.json') })

  const module = (_options: unknown, nuxt: any) => {
    if (!dir) return
    // The skip snapshot is linked by a shell that outlives the build. Spawning it after the build
    // costs ~0.15 s (forking a process that holds the whole build in memory), so it starts now and
    // waits for its script, or exits with this process.
    // One script name per module setup, so a helper only ever runs the script of its own build.
    // A build that never reaches `build:done` (it failed) gives its helper an empty script on
    // `close`; one that exits first leaves the helper to notice the process is gone.
    const roots = () => [nuxt.options.rootDir, ...nuxt.options._layers.map((l: any) => l.cwd)]
    // Scans at `modules:done` (types), `build:before` (skip) and `build:done`; a record is saved
    // only when the files didn't change between the scan it describes and the end of the build.
    let typesScan: ReturnType<typeof scan> | undefined
    let typesExtraValue: string | undefined
    let typesRestored = false
    let skipScan: ReturnType<typeof scan> | undefined
    let skipExtra: string | undefined
    let saveSkip = false
    let digests: Promise<Array<string | null>> | undefined
    const readDigests = (files: string[]) => new Promise<Array<string | null>>((resolve, reject) => {
      const worker = new Worker(DIGEST_WORKER, { workerData: { files } })
      worker.once('message', resolve)
      worker.once('error', reject)
    })
    let endScan: ReturnType<typeof scan> | undefined
    const scanAtEnd = () => (endScan ??= scan(roots()))
    const saveScript = join(dir, `.save-${process.pid}-${randomUUID()}.sh`)
    let saveScriptWritten = !skipEnabled
    if (skipEnabled) {
      mkdirSync(dir, { recursive: true })
      spawn('sh', ['-c', 'while [ ! -e "$1" ] && kill -0 "$2" 2>/dev/null; do sleep 0.02; done; [ -e "$1" ] && sh "$1"; rm -f "$1"', 'sh', saveScript, String(process.pid)], { detached: true, stdio: 'ignore' }).unref()
    }
    const runSaveScript = (script: string) => {
      if (saveScriptWritten) return
      saveScriptWritten = true
      writeFileSync(`${saveScript}.tmp`, script)
      renameSync(`${saveScript}.tmp`, saveScript)
    }
    nuxt.hook('close', () => runSaveScript(':'))
    let components: any[] = []
    let importsCtx: any
    const typesEnabled = process.env.EXP_RD_TYPES !== '0'
    const typesDir = join(dir, 'types')
    if (typesEnabled) {
      nuxt.hook('modules:done', () => {
        const t0 = performance.now()
        typesScan = scan(roots())
        typesExtraValue = typesExtra(nuxt.options)
        // For the ssr-styles resolve cache (patch N2): every file path under the app and layers.
        const structure = createHash('sha256')
        for (const f of typesScan.files) structure.update(f.path).update('\0')
        structure.update(typesScan.links.join('\0'))
        ;(globalThis as any).__expStructureHash = structure.digest('hex')
        const recordFile = join(typesDir, 'record.json')
        const saved = existsSync(recordFile) ? JSON.parse(readFileSync(recordFile, 'utf8')) : undefined
        typesRestored = recordMatches(saved, typesScan, typesExtraValue, typesContent)
        if (typesRestored) {
          // Where `ensureGeneratedTsConfigs` looks: `typesDir` when set (an app can keep buildDir in
          // node_modules/.cache), else buildDir.
          const out = nuxt.options.typesDir || nuxt.options.buildDir
          mkdirSync(out, { recursive: true })
          execFileSync('cp', ['-al', '--remove-destination', join(typesDir, 'files') + '/.', out])
        }
        console.info(`[exp:snapshot] generated types ${typesRestored ? 'restored' : 'not restored'} (${Math.round(performance.now() - t0)} ms)`)
      })
      nuxt.hook('build:done', async () => {
        const buildDir = nuxt.options.typesDir || nuxt.options.buildDir
        if (typesRestored || !typesScan || !skipScan || !digests || !existsSync(join(buildDir, 'tsconfig.json'))) return
        // The types were written from the files `typesScan` saw; the digests were read from those
        // of `skipScan`.
        if (!sameScan(typesScan, skipScan) || !sameScan(skipScan, scanAtEnd())) return
        const record = makeRecord(typesScan, typesExtraValue, await digests, typesContent)
        const next = `${typesDir}.next-${process.pid}`
        rmSync(next, { recursive: true, force: true })
        mkdirSync(join(next, 'files'), { recursive: true })
        const files = readdirSync(buildDir).filter(f => TYPE_FILES.test(f)).map(f => join(buildDir, f))
        if (existsSync(join(buildDir, 'types'))) files.push(join(buildDir, 'types'))
        if (files.length) execFileSync('cp', ['-al', ...files, join(next, 'files')])
        writeFileSync(join(next, 'record.json'), JSON.stringify(record))
        rmSync(typesDir, { recursive: true, force: true })
        renameSync(next, typesDir)
      })
    }
    nuxt.hook('components:extend', (list: any[]) => { components = list })
    nuxt.hook('imports:context', (ctx: any) => { importsCtx = ctx })
    nuxt.hook('build:before', async () => {
      const t0 = performance.now()
      const groups = new Map<string, Array<[number, string]>>()
      const add = (name: string, priority: number, value: string) => groups.set(name, [...(groups.get(name) ?? []), [priority, value]])
      for (const c of components) {
        const value = stable({ c: c.filePath, mode: c.mode, island: c.island, export: c.export, global: c.global })
        for (const name of [c.pascalName, `Lazy${c.pascalName}`]) add(name, c.priority ?? 0, value)
      }
      for (const i of await importsCtx?.getImports() ?? []) add(i.as ?? i.name, i.priority ?? 0, stable({ i: i.from, name: i.name, type: i.type }))
      registry = Object.fromEntries([...groups].map(([name, candidates]) => [name, byPriority(candidates)]))

      const o = nuxt.options
      const layerConfigs = o._layers.map((l: any) => l.configFile).filter((f: string) => f && existsSync(f)).map((f: string) => [f, sha(readFileSync(f))])
      const locks = lockFiles(o).map(f => [f, sha(readFileSync(f))])
      const env = Object.entries(process.env).filter(([k]) => /^(EXP_(?!RD_)|NUXT_|NITRO_|VITE_|NODE_ENV)/.test(k)).sort()
      const { vue, experimental, features, future, optimization, imports, components: componentOptions, sourcemap, ssr, app, css, buildId } = o
      // Resolved options that config files compute (often from env vars) and that reach code
      // without a file Rolldown can hash: Nitro options, runtime and app config.
      // Nitro looks virtual modules up by id; modules that scan layers in parallel (mcp-toolkit)
      // add them in a different order each run.
      const nitro = o.nitro.virtual ? { ...o.nitro, virtual: Object.fromEntries(Object.entries(o.nitro.virtual).sort(([x], [y]) => (x < y ? -1 : 1))) } : o.nitro
      // Templates reach the build as files and virtual modules, which the cache tracks itself; their
      // options can hold an app's data (Nuxt Content passes its database dump).
      const build = { ...o.build, templates: undefined }
      const resolvedInputs = stableConfig({ nitro, runtimeConfig: o.runtimeConfig, appConfig: o.appConfig, alias: o.alias, build }, new Set(['_layers']))
      if (process.env.EXP_RD_DEBUG_KEY) writeFileSync(`${process.env.EXP_RD_DEBUG_KEY}.${process.pid}.resolved.json`, resolvedInputs)
      const resolved = sha(resolvedInputs)
      const keyInputs = stable({ vue, experimental, features, future, optimization, imports, componentOptions, sourcemap, ssr, app: { baseURL: app.baseURL, buildAssetsDir: app.buildAssetsDir }, css, buildId, layerConfigs, locks, env, resolved })
      if (process.env.EXP_RD_DEBUG_KEY) writeFileSync(`${process.env.EXP_RD_DEBUG_KEY}.${process.pid}.json`, keyInputs)
      const key = sha(keyInputs).slice(0, 16)

      const prevFile = join(dir, 'registry.json')
      const prev = existsSync(prevFile) ? JSON.parse(readFileSync(prevFile, 'utf8')) as { key: string, registry: Record<string, string> } : undefined
      const changed = new Set<string>()
      if (prev && prev.key === key) {
        for (const name of new Set([...Object.keys(prev.registry), ...Object.keys(registry)])) if (prev.registry[name] !== registry[name]) changed.add(name)
      }
      const invalidate = [
        ...(process.env.EXP_RD_INVALIDATE?.split(',') ?? []),
        ...(process.env.EXP_RD_INVALIDATE_FILE ? readFileSync(process.env.EXP_RD_INVALIDATE_FILE, 'utf8').split('\n') : []),
      ].filter(Boolean)
      if (changed.size) {
        const words = [...changed].flatMap(n => [n, kebab(n)]).map(w => w.replace(/[$]/g, '\\$'))
        const re = new RegExp(`(?<![\\w$-])(?:${words.join('|')})(?![\\w$-])`)
        for (const layer of o._layers) for (const f of sourceFiles(layer.config.srcDir ?? layer.cwd)) if (re.test(readFileSync(f, 'utf8'))) invalidate.push(f)
        for (const f of sourceFiles(join(o.rootDir, 'server'))) if (re.test(readFileSync(f, 'utf8'))) invalidate.push(f)
      }
      state = { key, invalidate: [...new Set(invalidate)] }

      // Files listed as changed by hand never match a saved skip state.
      if (skipEnabled && !process.env.EXP_RD_INVALIDATE && !process.env.EXP_RD_INVALIDATE_FILE) {
        const h = createHash('sha256').update(key).update(stable(registry))
        for (const [k, v] of Object.entries(nuxt.vfs ?? {}).sort(([x], [y]) => (x < y ? -1 : 1))) h.update(k).update('\0').update(String(v)).update('\0')
        skipExtra = h.digest('hex')
        skipScan = scan(roots())
        const saved = existsSync(join(skipDir!, 'state.json')) ? JSON.parse(readFileSync(join(skipDir!, 'state.json'), 'utf8')) as SkipState : undefined
        skip = recordMatches(saved?.record, skipScan, skipExtra) && externalDepsMatch(join(skipDir!, 'external-deps.json')) ? saved : undefined

        // A skip snapshot saved after this build lists the dependencies each environment's build
        // writes now; remove the old lists so a write that fails can't leave one from an earlier
        // build in their place (external-deps.mjs then fails, and no snapshot is saved).
        if (!skip && existsSync(dir)) {
          for (const env of readdirSync(dir, { withFileTypes: true })) if (env.isDirectory()) rmSync(join(dir, env.name, 'build-deps.json'), { force: true })
        }
      }
      // The next records need every file's digest; a worker reads them while the build runs.
      skipScan ??= scan(roots())
      saveSkip = skipEnabled && !skip && !process.env.EXP_RD_INVALIDATE && !process.env.EXP_RD_INVALIDATE_FILE
      if (saveSkip || (typesEnabled && !typesRestored)) digests = readDigests(skipScan.files.map(f => f.path))
      console.info(`[exp:snapshot] key ${key} registry ${prev ? (prev.key === key ? `${changed.size} names changed` : 'key changed') : 'none'} invalidate ${state.invalidate.length} files, skip ${skip ? (skip.serverEntry ? 'client+ssr+nitro' : 'client+ssr') : 'none'} (${Math.round(performance.now() - t0)} ms)`)
    })
    nuxtRef = nuxt
    nuxt.hook('build:done', async () => {
      // The record describes the files `skipScan` saw; if any changed during the build, the outputs
      // may come from either version, so nothing is saved.
      const record = saveSkip && skipScan && digests && envConfig && sameScan(skipScan, scanAtEnd())
        ? makeRecord(skipScan, skipExtra, await digests)
        : undefined
      if (record) {
        // Hard links are safe: Nuxt removes .nuxt and Nitro removes .output before a build writes
        // them, so later builds create new files instead of writing into these. The linking runs in
        // a detached shell so the build doesn't wait for it; state.json is renamed into place last,
        // so a snapshot that isn't complete is never used.
        const { publicDir, ssrDir, serverDir, nitroJson } = paths(nuxt.options)
        const t0 = performance.now()
        const serverEntry = existsSync(nitroJson) ? JSON.parse(readFileSync(nitroJson, 'utf8')).serverEntry as string | undefined : undefined
        const clientState: Record<string, unknown> = {}
        for (const [k, st] of nuxt._clientBuildState ?? []) clientState[k] = (st as any).save()
        const buildOutputs: Record<string, string> = {}
        for (const k of Object.keys(nuxt.buildOutputs ?? {})) buildOutputs[k] = String(await nuxt.buildOutputs[k]())
        const next = `${skipDir}.next-${process.pid}`
        rmSync(next, { recursive: true, force: true })
        mkdirSync(next, { recursive: true })
        writeFileSync(join(next, 'state.json.pending'), JSON.stringify({ record, envConfig: envConfig!, clientState, buildOutputs, serverEntry } satisfies SkipState))
        const q = (x: string) => `'${x.replace(/'/g, `'\\''`)}'`
        const roots = [...new Set([nuxt.options.rootDir, ...nuxt.options._layers.map((l: any) => l.cwd)])]
        const script = [
          [process.execPath, EXTERNAL_DEPS, dir, join(next, 'external-deps.json'), ...roots].map(q).join(' '),
          `cp -al ${q(publicDir)} ${q(join(next, 'public'))}`,
          `cp -al ${q(ssrDir)} ${q(join(next, 'ssr'))}`,
          `cp -al ${q(serverDir)} ${q(join(next, 'server'))}`,
          `mv ${q(join(next, 'state.json.pending'))} ${q(join(next, 'state.json'))}`,
          `rm -rf ${q(skipDir + '.old')}`,
          `{ [ ! -e ${q(skipDir!)} ] || mv ${q(skipDir!)} ${q(skipDir + '.old')}; }`,
          `mv ${q(next)} ${q(skipDir!)}`,
          `rm -rf ${q(skipDir + '.old')}`,
        ].join(' && ')
        runSaveScript(script)
        console.info(`[exp:snapshot] saving environment skip state in the background (${Math.round(performance.now() - t0)} ms)`)
      } else if (skipEnabled) {
        runSaveScript(':')
      }
      mkdirSync(dir, { recursive: true })
      // Write a new file: snapshot copies are hard links of the base snapshot.
      writeFileSync(join(dir, 'registry.json.tmp'), JSON.stringify({ key: state!.key, registry }))
      renameSync(join(dir, 'registry.json.tmp'), join(dir, 'registry.json'))
    })
  }

  const vitePlugin: Plugin = {
    name: 'exp:rolldown-snapshot',
    buildApp: {
      order: 'pre',
      async handler (builder) {
        envConfig = envConfigHash(builder)
        if (process.env.EXP_RD_DEBUG_KEY) writeFileSync(`${process.env.EXP_RD_DEBUG_KEY}.${process.pid}.env.json`, envConfigs(builder))
        // Cache entries depend on the resolved config too (`define` is applied in `transform`):
        // the cache key gets the config hash, now that the config is resolved.
        for (const env of Object.values(builder.environments) as any[]) {
          const cache = env.config.build?.rolldownOptions?.experimental?.buildCache
          if (cache && state) cache.key = `${state.key}-${envConfig.slice(0, 16)}`
        }
        if (skip && skip.envConfig !== envConfig) {
          console.info('[exp:snapshot] resolved environment config changed, skip none')
          skip = undefined
        }
        if (!skip) return
        const { publicDir, ssrDir, serverDir } = paths(nuxtRef.options)
        // Hard links again, replacing what is there (Nitro has copied public/ by the time the client
        // files come back), so no later write lands in a linked file.
        mkdirSync(ssrDir, { recursive: true })
        execFileSync('cp', ['-al', '--remove-destination', join(skipDir!, 'ssr') + '/.', ssrDir])
        // Nitro's own `buildApp` (nitro:prepare) empties .output after this hook, so the client
        // files go back just before the first environment that does build (Nitro's).
        const build = builder.build.bind(builder)
        let restored = false
        builder.build = async (env: any) => {
          if (!restored) { mkdirSync(publicDir, { recursive: true }); execFileSync('cp', ['-al', '--remove-destination', join(skipDir!, 'public') + '/.', publicDir]); restored = true }
          // Nitro builds its own environment without checking `isBuilt`; with every input
          // unchanged its output is the saved one. `writeBuildInfo` only reads the entry chunk.
          if (env.name === 'nitro' && skip.serverEntry && existsSync(join(skipDir!, 'server'))) {
            mkdirSync(serverDir, { recursive: true })
            execFileSync('cp', ['-al', '--remove-destination', join(skipDir!, 'server') + '/.', serverDir])
            env.isBuilt = true
            return { output: [{ type: 'chunk', isEntry: true, fileName: relative(join(nuxtRef.options.rootDir, '.output/server'), join(nuxtRef.options.rootDir, '.output', skip.serverEntry)) }] }
          }
          return build(env)
        }
        for (const [k, st] of nuxtRef._clientBuildState ?? []) if (k in skip.clientState) (st as any).restore(skip.clientState[k])
        for (const [k, code] of Object.entries(skip.buildOutputs)) nuxtRef.buildOutputs[k] = () => code
        for (const name of ['client', 'ssr']) if (builder.environments[name]) builder.environments[name].isBuilt = true
      },
    },
    configEnvironment (name, config) {
      if (!dir || !state) return
      config.build ??= {}
      const ro = (config.build.rolldownOptions ??= {}) as any
      ro.experimental = { ...ro.experimental, buildCache: { dir: join(dir, name), key: state.key, invalidate: state.invalidate } }
    },
  }
  return { module, vitePlugin, enabled: !!dir }
}
