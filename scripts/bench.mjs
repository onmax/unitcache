#!/usr/bin/env node
// Interleaved timing runs of the same app and changes under several configurations.
// Usage: node scripts/bench.mjs --app dashboard [--configs today,ours] [--rounds 5] [--tag name]
//
//   today       stock Rolldown, stock Vite/Nuxt, `experimental.buildCache` with a warm node_modules/.cache
//   ours        the fork's Rolldown with the module snapshot and the patches in patches/, each build in a new
//               process from a fresh copy of the base snapshot on disk
//
// Scenarios per round: `nochange` (rebuild of the committed tree) and `edit` (one component
// edited with text unique to the round, so no cache saw it before). Times are taken inside LAB_RUNNER
// when it is set (see lab.mjs), so they exclude queueing. The order of configurations rotates every round. `wall` ends when
// the build process exits; `saved` adds the wait for ours' background snapshot save (what CI waits
// for before uploading the cache); `prep` is the time to copy the base snapshot before the build
// (CI would download and unpack the cache instead; today's warm cache stays in place).
import { appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { app as getApp, build, median, restore, S, sh, useRolldown } from './lab.mjs'

const args = process.argv.slice(2)
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i < 0 ? d : args[i + 1] }
const a = getApp(opt('app', 'dashboard'))
const configs = opt('configs', 'today,ours').split(',')
const rounds = Number(opt('rounds', '5'))
const tag = opt('tag', `${a.name}-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')}`)
const OUT = join(S, 'results/bench', tag)
mkdirSync(OUT, { recursive: true })

const editFile = {
  dashboard: ['app/components/home/HomeStats.vue', '{{ stat.value }}', tag => `{{ stat.value }} ${tag}`],
  saas: ['app/components/AppHeader.vue', "label: 'Docs'", tag => `label: 'Docs ${tag}'`],
}[a.name]
function editOne (round, config) {
  const [file, anchor, to] = editFile
  const s = readFileSync(join(a.rootAbs, file), 'utf8')
  if (!s.includes(anchor)) throw new Error('edit anchor missing')
  writeFileSync(join(a.rootAbs, file), s.replace(anchor, to(`round ${round} ${config}`)))
}

const CACHE = join(S, 'cache', a.name)
const RD_BASE = join(CACHE, 'bench-rd-base'), RD_RUN = join(CACHE, 'bench-rd-run')
let prep = 0
const setup = {
  today: { rolldown: 'stock', patches: 'revert', env: () => ({ ...a.buildCacheEnv, EXP_HOOK_FILTERS: '0' }) },
  ours: {
    rolldown: 'fork', patches: 'apply',
    env: (prime) => {
      if (prime) return { EXP_RD_CACHE: RD_BASE }
      const t0 = Date.now()
      rmSync(RD_RUN, { recursive: true, force: true })
      sh('cp', ['-al', RD_BASE, RD_RUN])
      prep = (Date.now() - t0) / 1000
      return { EXP_RD_CACHE: RD_RUN }
    },
  },
}

function use (config) {
  useRolldown(setup[config].rolldown)
  sh('node', [join(S, 'scripts/patches.mjs'), setup[config].patches])
}

const tsv = join(OUT, 'runs.tsv')
if (!existsSync(tsv)) writeFileSync(tsv, 'round\tconfig\tscenario\twall\tcpu\tenvs\tnote\tsaved\tprep\n')
const row = (round, config, scenario, b) => appendFileSync(tsv, `${round}\t${config}\t${scenario}\t${b.wall}\t${b.cpu.toFixed(1)}\t${b.envs.join('/')}\t${b.restored ? 'buildCache restored' : ''}\t${(b.wall + b.saveWait).toFixed(3)}\t${prep.toFixed(3)}\n`)

// Prime each configuration from the committed tree: a warm node_modules/.cache for `today`, the
// base snapshot for ours.
for (const config of configs) {
  restore(a); use(config)
  if (config === 'ours') rmSync(RD_BASE, { recursive: true, force: true })
  const b = build(a, `prime-${config}`, OUT, setup[config].env(true))
  row(0, config, 'prime', b)
  console.log(`prime ${config} ${b.wall}s`)
}

for (let round = 1; round <= rounds; round++) {
  const order = configs.map((_, i) => configs[(i + round) % configs.length])
  for (const config of order) {
    use(config)
    for (const scenario of ['nochange', 'edit']) {
      restore(a)
      if (scenario === 'edit') editOne(round, config)
      prep = 0
      const b = build(a, `r${round}-${config}-${scenario}`, OUT, setup[config].env(false))
      row(round, config, scenario, b)
      console.log(`r${round} ${config.padEnd(10)} ${scenario.padEnd(8)} ${b.wall}s`)
    }
  }
}
restore(a)

const rows = readFileSync(tsv, 'utf8').trim().split('\n').slice(1).map(l => l.split('\t')).filter(r => r[2] !== 'prime')
const groups = {}
for (const [, config, scenario, wall, , , , saved, prepS] of rows) (groups[`${config} ${scenario}`] ??= []).push([Number(wall), Number(saved ?? wall), Number(prepS ?? 0)])
const stat = v => { const s = [...v].sort((x, y) => x - y); return `${median(s).toFixed(1)}s (${s[0].toFixed(1)}-${s.at(-1).toFixed(1)})` }
const lines = Object.entries(groups).map(([k, v]) =>
  `${k.padEnd(22)} median ${stat(v.map(x => x[0]))}  saved ${stat(v.map(x => x[1]))}  prep ${stat(v.map(x => x[2]))}  n=${v.length}`)
useRolldown('fork')
writeFileSync(join(OUT, 'summary.txt'), lines.join('\n') + '\n')
console.log(lines.join('\n'))
