#!/usr/bin/env node
// The check: for each change in a corpus, build the edited tree incrementally from the base
// snapshot and clean, compare the normalized outputs, and record times. Exits 1 on any mismatch.
//
// Usage: node scripts/check.mjs --app big3 [--corpus scripted] [--only a,b] [--rebase] [--tag name]
//          [--reps N] [--rolldown fork|stock] [--patches apply|revert] [--no-clean]
//   --rebase    rebuild the base snapshot from the committed tree
//   --reps N    incremental builds per change (median is reported), default 1
//   --no-clean  skip clean builds whose reference is missing (verdict "no-ref")
//   --keep      keep every incremental output (mismatching ones are always kept)
// Env passed to incremental builds: INC_ENV="K=V K=V". The playground's sources must be committed:
// the runner restores them from git between changes.
import { spawnSync } from 'node:child_process'
import { appendFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { corpora } from './corpus.mjs'
import { app as getApp, build, median, restore, rolldownArtifactHash, S, sh, treeHash, useRolldown } from './lab.mjs'

const args = process.argv.slice(2)
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i < 0 ? def : args[i + 1] }
const flag = name => args.includes(`--${name}`)
const a = getApp(opt('app', 'big3'))
const corpusName = opt('corpus', 'scripted')
const only = opt('only')?.split(',')
const reps = Number(opt('reps', '1'))
const rolldown = opt('rolldown', 'fork')
const patchMode = opt('patches', 'apply')
const tag = opt('tag', `${a.name}-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')}`)
const incEnv = Object.fromEntries((process.env.INC_ENV ?? '').split(/\s+/).filter(Boolean).map(kv => kv.split(/=(.*)/s).slice(0, 2)))
const BASE = join(S, 'cache', a.name, 'base'), RUN = join(S, 'cache', a.name, 'run')
const OUT = join(S, 'results/check', tag)
mkdirSync(OUT, { recursive: true })

useRolldown(rolldown)
const patchStamp = sh('node', [join(S, 'scripts/patches.mjs'), patchMode]).match(/stamp (\w+)/)[1]
const rolldownDir = realpathSync(join(S, 'vendor/rolldown'))
const rolldownStamp = rolldown === 'fork' ? sh('git', ['-C', rolldownDir, 'rev-parse', '--short', 'HEAD']).trim() : 'stock'
const rolldownArtifact = rolldownArtifactHash()

// Generated type files in `.nuxt` (what the adapter restores instead of regenerating).
const TYPE_FILES = /^(tsconfig[\w.]*\.json|[\w.]+\.d\.ts)$/
function copyTypes (dest) {
  const dir = join(a.cwdAbs, '.nuxt')
  rmSync(dest, { recursive: true, force: true })
  if (a.kind !== 'nuxt' || !existsSync(dir)) return
  mkdirSync(dest, { recursive: true })
  for (const f of readdirSync(dir)) if (TYPE_FILES.test(f) || f === 'types') cpSync(join(dir, f), join(dest, f), { recursive: true })
}
function typesEqual (x, y) {
  if (!existsSync(x) && !existsSync(y)) return { equal: true, text: '' }
  const r = spawnSync('diff', ['-rq', x, y], { encoding: 'utf8' })
  return { equal: r.status === 0, text: r.stdout + r.stderr }
}

function normdiff (x, y) {
  const r = spawnSync('node', [join(S, 'scripts/normdiff.mjs'), x, y, '--show', '2'], { encoding: 'utf8', maxBuffer: 1 << 26 })
  return { equal: r.status === 0, text: r.stdout }
}

// A clean reference depends on the tree, the installed patches, the Rolldown artifacts, the app's build
// env and REF_EPOCH (bumped by hand), not on the incremental code path.
function reference (hash, label, env = {}) {
  const dir = join(S, 'results/refs', a.name, hash)
  if (existsSync(join(dir, 'meta.json'))) return { dir, ...JSON.parse(readFileSync(join(dir, 'meta.json'), 'utf8')) }
  if (flag('no-clean')) return undefined
  const b = build(a, `${label}-clean`, OUT, env)
  rmSync(dir, { recursive: true, force: true })
  mkdirSync(dir, { recursive: true })
  cpSync(a.outputAbs, join(dir, 'output'), { recursive: true })
  copyTypes(join(dir, 'types'))
  const meta = { wall: b.wall, cpu: b.cpu, envs: b.envs, label, rolldown, rolldownStamp, rolldownArtifact, date: new Date().toISOString() }
  writeFileSync(join(dir, 'meta.json'), JSON.stringify(meta))
  return { dir, ...meta }
}

restore(a)
if (flag('rebase') || !existsSync(join(BASE, 'registry.json'))) {
  rmSync(BASE, { recursive: true, force: true })
  const b = build(a, 'base-record', OUT, { EXP_RD_CACHE: BASE })
  console.log(`base snapshot recorded: wall ${b.wall}s`)
}

const corpus = corpora[corpusName](a).filter(c => !only || only.includes(c.name))
const tsv = join(OUT, 'summary.tsv')
rmSync(join(OUT, 'refs.tsv'), { force: true })
writeFileSync(tsv, 'change\tunits\tinc_wall_median\tinc_walls\tinc_cpu\tclean_wall\tspeedup\tenvs_inc\tenvs_clean\treused(client/ssr/nitro)\trerun(client/ssr/nitro)\tsnapshot\tverdict\n')
let mismatches = 0
const rows = []
for (const change of corpus) {
  restore(a)
  change.apply()
  const hash = treeHash(a, [patchStamp, rolldownArtifact, JSON.stringify(a.env), JSON.stringify(change.env ?? {}), process.env.REF_EPOCH ?? '0', ...(process.env.EXP_UNITS || process.env.EXP_UNIT_GROUPS ? [`units ${process.env.EXP_UNITS}/${process.env.EXP_UNIT_GROUPS}`] : [])])
  const ref = reference(hash, change.name, change.env)
  // Which clean reference each change was compared with (scripts/recompare.mjs reads it).
  appendFileSync(join(OUT, 'refs.tsv'), `${change.name}\t${hash}\n`)
  const runs = []
  for (let i = 0; i < reps; i++) {
    rmSync(RUN, { recursive: true, force: true })
    sh('cp', ['-al', BASE, RUN])
    runs.push(build(a, `${change.name}-inc${i}`, OUT, { EXP_RD_CACHE: RUN, ...change.env, ...incEnv }))
  }
  const last = runs.at(-1)
  const cmp = ref ? normdiff(join(ref.dir, 'output'), a.outputAbs) : { equal: true, text: 'no reference\n' }
  if (ref) {
    copyTypes(join(OUT, 'types-inc'))
    const t = typesEqual(join(ref.dir, 'types'), join(OUT, 'types-inc'))
    if (!t.equal) cmp.text = `types differ\n${t.text}${cmp.text}`
    cmp.equal &&= t.equal
  }
  if (!cmp.equal) mismatches++
  writeFileSync(join(OUT, `${change.name}.diff.txt`), cmp.text)
  if (flag('keep') || !cmp.equal) cpSync(a.outputAbs, join(OUT, `${change.name}.output`), { recursive: true })
  const inc = median(runs.map(r => r.wall))
  const reused = last.stats.map(s => s.reused).join('/')
  const rerun = last.stats.map(s => s.missing + s.changed + s.invalidated + s.excluded).join('/')
  const verdict = ref ? (cmp.equal ? 'equal' : `MISMATCH ${cmp.text.split('\n')[0]}`) : 'no-ref'
  const row = [change.name, change.units ?? '', inc.toFixed(1), runs.map(r => r.wall.toFixed(1)).join(','), last.cpu.toFixed(1), ref?.wall?.toFixed(1) ?? '', ref ? (ref.wall / inc).toFixed(2) : '', last.envs.map(v => v.toFixed(1)).join('/'), ref?.envs?.map(v => v.toFixed(1)).join('/') ?? '', reused, rerun, last.snap ?? '', verdict]
  appendFileSync(tsv, row.join('\t') + '\n')
  rows.push(row)
  console.log(`${change.name.padEnd(22)} inc ${inc.toFixed(1)}s (clean ${ref?.wall?.toFixed(1) ?? '?'}s) rerun ${rerun} ${verdict}`)
}
restore(a)
const score = median(rows.map(r => Number(r[2])))
writeFileSync(join(OUT, 'score.json'), JSON.stringify({ tag, app: a.name, corpus: corpusName, score, mismatches, changes: rows.length, incEnv, rolldown, rolldownStamp, patchStamp }, null, 2))
console.log(`\nscore (median incremental wall) ${score.toFixed(1)}s over ${rows.length} changes, mismatches ${mismatches}\nresults in ${OUT}`)
process.exitCode = mismatches ? 1 : 0
