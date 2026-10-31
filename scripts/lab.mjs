// Shared helpers for check.mjs and bench.mjs: the playground registry, restoring a playground's
// sources from git, hashing its tree, switching Rolldown, and running one timed build.
import { execFileSync, spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdtempSync, readdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

export const S = join(import.meta.dirname, '..')
// Set by `node scripts/use-rolldown.mjs <fork>/packages/rolldown`.
const FORK = 'rolldown-fork'

// `root` is what restore and the tree hash cover; `cwd` is where the build runs; `output` is
// what the check compares. `modulesYaml` stands in for the installed dependency tree.
export const apps = {
// `env` is set on every build of the app; `buildCacheEnv` turns on Nuxt's `experimental.buildCache`
// (the "today" baseline); `buildCacheDir` is where Nuxt keeps it, removed before clean builds.
  big3: { kind: 'nuxt', root: 'playgrounds/big3', cwd: 'playgrounds/big3/app', output: 'playgrounds/big3/app/.output', modulesYaml: 'node_modules/.modules.yaml', env: {}, buildCacheEnv: { EXP_BUILD_CACHE: '1' }, buildCacheDir: 'node_modules/.cache/nuxt' },
  layers26: { kind: 'nuxt', root: 'playgrounds/layers26', cwd: 'playgrounds/layers26/app', output: 'playgrounds/layers26/app/.output', modulesYaml: 'node_modules/.modules.yaml', env: {}, buildCacheEnv: { EXP_BUILD_CACHE: '1' }, buildCacheDir: 'node_modules/.cache/nuxt' },
  vite: { kind: 'vite', root: 'playgrounds/vite-app', cwd: 'playgrounds/vite-app', output: 'playgrounds/vite-app/dist', modulesYaml: 'node_modules/.modules.yaml', env: {}, buildCacheEnv: {}, buildCacheDir: null },
}

export function app (name) {
  const a = apps[name]
  if (!a) throw new Error(`unknown app ${name}; known: ${Object.keys(apps).join(', ')}`)
  return { name, ...a, rootAbs: join(S, a.root), cwdAbs: join(S, a.cwd), outputAbs: join(S, a.output), modulesYamlAbs: join(S, a.modulesYaml), buildCacheDirAbs: a.buildCacheDir && join(S, a.buildCacheDir) }
}

export const sh = (cmd, args, opts = {}) => execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 1 << 28, cwd: S, ...opts })

const yamlCopies = new Map()
/** Puts the playground's tracked sources back to HEAD and removes untracked source files. */
export function restore (a) {
  sh('git', ['checkout', '--', a.root])
  sh('git', ['clean', '-fdq', '--', a.root])
  if (!yamlCopies.has(a.name) && existsSync(a.modulesYamlAbs)) yamlCopies.set(a.name, readFileSync(a.modulesYamlAbs, 'utf8'))
  const yaml = yamlCopies.get(a.name)
  if (yaml !== undefined && readFileSync(a.modulesYamlAbs, 'utf8') !== yaml) writeFileSync(a.modulesYamlAbs, yaml)
}

/** A hash of the playground's sources as they are now, tracked or not, plus extra inputs. */
export function treeHash (a, extra = []) {
  const dir = mkdtempSync(join(tmpdir(), 'lab-index-'))
  const env = { ...process.env, GIT_INDEX_FILE: join(dir, 'index') }
  try {
    sh('git', ['read-tree', 'HEAD'], { env })
    sh('git', ['add', '-A', '--', a.root], { env })
    const tree = sh('git', ['write-tree'], { env }).trim()
    const h = createHash('sha256').update(tree)
    if (existsSync(a.modulesYamlAbs)) h.update(readFileSync(a.modulesYamlAbs))
    for (const e of extra) h.update(String(e))
    return h.digest('hex').slice(0, 16)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

/** A hash of the Rolldown that `vendor/rolldown` points at: its dist JS and native binding. */
export function rolldownArtifactHash () {
  const dist = join(realpathSync(join(S, 'vendor/rolldown')), 'dist')
  const h = createHash('sha256')
  for (const f of readdirSync(dist, { recursive: true }).map(String).filter(f => /\.(mjs|js|node)$/.test(f)).sort()) h.update(f).update(readFileSync(join(dist, f)))
  return h.digest('hex').slice(0, 16)
}

/** Points every playground's `rolldown` at stock 1.2.16 or at the fork (see pnpm-workspace.yaml). */
export function useRolldown (which) {
  const target = which === 'fork' ? FORK : 'rolldown-stock/node_modules/rolldown'
  sh('ln', ['-sfn', target, join(S, 'vendor/rolldown')])
}

// On a machine shared by many jobs, set LAB_RUNNER to a command that runs one job at a time (the
// author's machine uses `heavy`, a lock with slots); the time is taken inside it, so it excludes
// the wait for a slot.
const RUNNER = process.env.LAB_RUNNER ? process.env.LAB_RUNNER.split(' ') : []

/** One timed build. */
export function build (a, label, outDir, env = {}) {
  const log = join(outDir, `${label}.log`)
  const cmd = a.kind === 'vite' ? 'node_modules/.bin/vite build' : 'node_modules/.bin/nuxt build'
  const [bin, ...pre] = [...RUNNER, 'bash']
  const r = spawnSync(bin, [...pre, '-c', `TIMEFORMAT='TIME %R %U %S'; time ${cmd}`], {
    cwd: a.cwdAbs, encoding: 'utf8', maxBuffer: 1 << 28,
    env: { ...process.env, LC_ALL: 'C', EXP_BUILD_ID: 'fixed-0001', ROLLDOWN_PHASE_TIMINGS: '1', HEAVY_WAIT: '0', HEAVY_MAX: '1500', ...a.env, ...env },
  })
  const text = (r.stdout + r.stderr).replace(/\x1b\[[0-9;]*m/g, '')
  writeFileSync(log, text)
  if (r.status !== 0) throw new Error(`build ${label} failed (exit ${r.status}), see ${log}`)
  const time = text.match(/TIME ([\d.]+) ([\d.]+) ([\d.]+)/)
  if (!time) throw new Error(`build ${label}: no TIME line, see ${log}`)
  const [wall, user, sys] = time.slice(1).map(Number)
  const envs = [...text.matchAll(/built in ([\d.]+)(m?s)/g)].map(m => m[2] === 's' ? Number(m[1]) : Number(m[1]) / 1000)
  const stats = [...text.matchAll(/\[rolldown-phase\] (\S+) save-build-cache \(hit (\d+) missing (\d+) changed (\d+) invalidated (\d+) excluded (\d+) kept (\d+)\)/g)]
    .map(m => ({ env: m[1].includes('public') ? 'client' : m[1].includes('services/ssr') ? 'ssr' : m[1].includes('server') ? 'nitro' : m[1], reused: +m[2], missing: +m[3], changed: +m[4], invalidated: +m[5], excluded: +m[6] }))
  const snap = text.match(/\[exp:snapshot\] (.*)/)?.[1]
  // The adapter saves the environment-skip snapshot in a background shell; wait for it so the
  // next copy of the cache dir includes it. CI waits the same way before uploading the cache, so
  // `saveWait` (seconds after the build process exits) is reported next to `wall`.
  let saveWait = 0
  if (env.EXP_RD_CACHE) {
    const t0 = Date.now()
    while (Date.now() - t0 < 30000 && existsSync(env.EXP_RD_CACHE) && readdirSync(env.EXP_RD_CACHE).some(f => f.startsWith('skip.next-'))) sh('sleep', ['0.05'])
    saveWait = (Date.now() - t0) / 1000
  }
  return { wall, saveWait, cpu: user + sys, envs, stats, snap, log, restored: /buildCache.*[Rr]estor|[Rr]estored .* from cache/.test(text) }
}

export const median = xs => { const s = [...xs].sort((x, y) => x - y); return s[Math.floor((s.length - 1) / 2)] }
