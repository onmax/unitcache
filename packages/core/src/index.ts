// unitcache: build an app made of units (layers, workspace packages, framework modules) so that a
// change in one unit redoes that unit's work only.
//
// - Grouping (any Rolldown): every unit's modules go to their own chunks, split by entry, so a
//   change in one unit renames that unit's chunks only.
// - Snapshot (a Rolldown with the `buildCache` capability): each environment keeps its build
//   cache in `<cache.dir>/<environment>`, and the next build, in any process, reuses
//   them for unchanged modules.
// - Change report: the units whose files changed since the last build kept in `report.dir`.
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type { Plugin } from 'vite'
import { type Capabilities, detectCapabilities } from './capabilities.ts'
import { changedUnits, unitKeys } from './keys.ts'
import { indexUnits, type Unit, type UnitIndex } from './units.ts'

export type { Capabilities, Unit }
export { detectCapabilities, indexUnits, unitKeys }

export interface UnitcacheOptions {
  // The units, or a function called once when the build starts (a framework adapter that only
  // knows its units after setup).
  units: Unit[] | (() => Unit[])
  // Snapshot store; without it, grouping only.
  cache?: {
    dir: string
    // Inputs Rolldown can't see that change how every module is transformed (options, lockfile).
    key?: string
    // Files to treat as changed although their contents didn't (registries resolved elsewhere).
    invalidate?: string[]
  }
  // Modules that sit in a unit's root but depend on every unit (a registry, a route table): kept
  // out of unit chunks, in chunks of their own. Styles never count: they all stay together.
  aggregate?: (id: string) => boolean
  // `false`: no unit chunks (snapshot and report only). Grouping is also left off, with a warning,
  // for a build whose config splits chunks its own way (`codeSplitting.groups`, `manualChunks`,
  // `advancedChunks`), turns off `strictExecutionOrder` or `codeSplitting`, has several outputs,
  // or keeps entry signatures (`preserveEntrySignatures` `'strict'` or `'exports-only'`, library
  // builds).
  group?: boolean
  // Environments to group (default all); others get the snapshot only.
  environments?: string[]
  // Change report: `onChanged` gets the units whose key differs from the last successful build
  // that kept its keys in `dir` (all of them on the first). Keys are kept when the whole build
  // succeeds: after every environment (`vite build`, Nuxt), or after the one environment of a
  // `build()` call.
  report?: {
    dir: string
    onChanged?: (changed: string[], units: Unit[]) => void
  }
}

export const UNIT_KEYS_FILE = 'unit-keys.json'

// Styles (CSS files and SFC style blocks) stay out of unit chunks: a chunk's CSS is concatenated
// in module order, so `A/base.css`, `B/theme.css`, `A/override.css` split into an A and a B chunk
// can't keep their order.
const STYLE_RE = /\.(?:css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)|[?&]type=style(?:&|$)/

// Why grouping can't run on a build's output options as given, if it can't.
function groupingConflict (output: any): string | undefined {
  if (!output) return
  if (output.codeSplitting === false) return '`codeSplitting` is off'
  if (output.codeSplitting?.groups?.length) return 'it has `codeSplitting.groups` of its own'
  // Global thresholds (`minSize`, `maxSize`, `minShareCount`, ...) apply to every group: a unit
  // group below `minSize` is skipped and its modules land in the `rest` group with other units'.
  if (typeof output.codeSplitting === 'object' && Object.keys(output.codeSplitting).some(k => k !== 'groups')) return `it sets \`codeSplitting\` options (${Object.keys(output.codeSplitting).join(', ')})`
  if (output.manualChunks) return 'it has `manualChunks` (Rolldown ignores them next to `codeSplitting`)'
  if (output.advancedChunks) return 'it has `advancedChunks`'
  if (output.strictExecutionOrder === false) return '`strictExecutionOrder` is off, and unit chunks need it to keep the order modules run in'
}

// Two plugins: the main one, and one that ends the report cycle once the whole build succeeded.
export function unitcache (options: UnitcacheOptions): Plugin[] {
  let appRoot = process.cwd()
  let index: UnitIndex | undefined
  const units = () => index ??= indexUnits(typeof options.units === 'function' ? options.units() : options.units, appRoot)
  let capabilities: Promise<Capabilities> | undefined
  const cacheDir = options.cache && resolve(options.cache.dir)
  const reportDir = options.report && resolve(options.report.dir)
  const grouping = (env: string) => options.group !== false && (!options.environments || options.environments.includes(env))

  // Entry modules per environment (emitted chunks included), from the last scan; the group tests
  // run after it. They stay out of every group: an entry gets its own chunk anyway, and a
  // plugin that emitted a chunk and asks for its file name gets a name with an unreplaced hash
  // placeholder when a group captured the chunk's module (Rolldown with
  // `preserveEntrySignatures: 'allow-extension'`, as in Vite SSR builds; Nuxt's SSR styles:
  // `X-styles-1.mjs-!~{0lH}~.js`).
  const entries = new Map<string, Set<string>>()
  const arrayOutput = new Set<string>()
  // Outputs per environment, and how many of the current one's succeeded (a `build()` call).
  const outputs = new Map<string, number>()
  let succeeded = 0
  let current = ''
  let signatures: unknown
  const envName = (ctx: any) => ctx?.environment?.name ?? current

  // One report cycle: keys hashed when the build starts, kept when it succeeds. `app` is set while
  // Vite's `buildApp` runs every environment; otherwise each environment is its own cycle.
  let app = false
  let keys: Record<string, string> | undefined
  const exclude = [cacheDir, reportDir].filter(Boolean) as string[]
  const startCycle = () => {
    keys = undefined
    succeeded = 0
    if (!reportDir) return
    keys = unitKeys(units().units, exclude)
    const file = join(reportDir, UNIT_KEYS_FILE)
    const previous = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : undefined
    options.report!.onChanged?.(changedUnits(keys, previous), units().units)
  }
  const endCycle = () => {
    if (keys && reportDir) {
      mkdirSync(reportDir, { recursive: true })
      const file = join(reportDir, UNIT_KEYS_FILE)
      writeFileSync(`${file}.tmp`, JSON.stringify(keys))
      renameSync(`${file}.tmp`, file)
    }
    keys = undefined
  }

  const outputDone = (env: string) => {
    if (++succeeded >= (outputs.get(env) ?? 1)) endCycle()
  }

  const groups = (env: string) => {
    const free = (id: string) => !entries.get(env)?.has(id)
    return [
      // `includeDependenciesRecursively: false` everywhere: by default the first group to import a
      // module of another unit captures it.
      ...(options.aggregate ? [{ name: 'aggregate', test: (id: string) => free(id) && !STYLE_RE.test(id) && options.aggregate!(id), entriesAware: true, includeDependenciesRecursively: false, priority: 2 }] : []),
      // One group per unit, and `entriesAware` keeps the split by entry inside it. (A single group
      // whose `name` function returns the unit merges small subgroups of different units into one
      // chunk.)
      ...units().units.map(unit => ({
        name: unit.name.replace(/[^\w-]+/g, '_'),
        test: (id: string) => free(id) && !STYLE_RE.test(id) && units().of(id) === unit,
        entriesAware: true,
        includeDependenciesRecursively: false,
        priority: 1,
      })),
      // Everything else (installed dependencies, styles, virtual modules), split by entry as
      // Rolldown does by default, under a short name (a chunk named after a virtual module's id
      // can exceed the file system's name limit).
      { name: 'rest', test: (id: string) => free(id) && !id.startsWith('\0rolldown/runtime'), entriesAware: true, includeDependenciesRecursively: false, priority: 0 },
    ]
  }

  return [{
    name: 'unitcache',
    apply: 'build',
    async config (config) {
      appRoot = resolve(config.root ?? process.cwd())
      capabilities ??= detectCapabilities(appRoot)
      await capabilities
    },
    async configEnvironment (name, config) {
      const out = config.build?.rolldownOptions?.output
      if (Array.isArray(out)) arrayOutput.add(name)
      outputs.set(name, Array.isArray(out) ? out.length : 1)
      const caps = await capabilities!
      if (!cacheDir || !caps.buildCache) return
      return { build: { rolldownOptions: { experimental: { buildCache: { dir: join(cacheDir, name), key: options.cache!.key, invalidate: options.cache!.invalidate } } } } }
    },
    // Rolldown calls `options`, then `outputOptions`, then the build hooks.
    options (input) {
      signatures = input.preserveEntrySignatures ?? 'exports-only'
    },
    buildApp: {
      order: 'pre',
      handler () {
        app = true
        startCycle()
      },
    },
    buildStart () {
      current = envName(this)
      entries.delete(current)
      if (!app) startCycle()
    },
    buildEnd (error) {
      const env = envName(this)
      if (error || !grouping(env)) return
      const set = new Set<string>()
      for (const id of this.getModuleIds()) if (this.getModuleInfo(id)?.isEntry) set.add(id)
      entries.set(env, set)
    },
    outputOptions (output) {
      const env = envName(this)
      if (!grouping(env)) return null
      const conflict = signatures === 'strict' || signatures === 'exports-only'
        ? `entry signatures are kept (\`preserveEntrySignatures: '${signatures}'\`)`
        : arrayOutput.has(env) ? 'it has several outputs' : groupingConflict(output)
      if (conflict) {
        ;(this as any).warn?.(`[unitcache] no unit chunks in environment "${env}": ${conflict}`)
        return null
      }
      // Chunks by unit break the order modules of different units run in (an entry importing
      // A/init, B/set, A/check runs A/check before B/set); Rolldown keeps the order by wrapping
      // modules whose order a chunk would change.
      return { ...output, strictExecutionOrder: true, codeSplitting: { groups: groups(env) } }
    },
  }, {
    // Last, so it sees the build after every other plugin's hooks.
    name: 'unitcache:build-end',
    apply: 'build',
    enforce: 'post',
    buildApp: {
      order: 'post',
      // Vite builds the environments itself after every `buildApp` hook when none of them built
      // any (`vite build`); build them here instead, so the keys are kept after they succeed. A
      // failing build throws before `endCycle`.
      async handler (builder) {
        const envs = Object.values(builder.environments)
        if (envs.every(e => !e.isBuilt)) for (const e of envs) await builder.build(e)
        endCycle()
        app = false
      },
    },
    // Without `buildApp` (a `build()` call), the environment succeeded once each of its outputs is
    // written, or generated when nothing is written.
    generateBundle: {
      order: 'post',
      handler () {
        if (!app && (this as any).environment?.config.build.write === false) outputDone(envName(this))
      },
    },
    writeBundle: {
      order: 'post',
      handler () {
        if (!app) outputDone(envName(this))
      },
    },
  }]
}
