#!/usr/bin/env node
// The check: for each edit below, build the edited tree incrementally from the base snapshot and
// clean, and compare the normalized outputs and generated types. Exits 1 on any mismatch.
//
// Usage: node scripts/check.mjs --app big3 [--only a,b] [--rebase] [--tag name]
//   --rebase  rebuild the base snapshot from the committed tree
// The playground's sources must be committed: the runner restores them from git between edits.
import { spawnSync } from 'node:child_process'
import { appendFileSync, copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { app as getApp, build, median, restore, rolldownArtifactHash, S, sh, treeHash, useRolldown } from './lab.mjs'

const args = process.argv.slice(2)
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i < 0 ? def : args[i + 1] }
const a = getApp(opt('app', 'big3'))
const only = opt('only')?.split(',')
const tag = opt('tag', `${a.name}-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')}`)
const BASE = join(S, 'cache', a.name, 'base'), RUN = join(S, 'cache', a.name, 'run')
const OUT = join(S, 'results/check', tag)
mkdirSync(OUT, { recursive: true })

function edit (file, from, to) {
  const s = readFileSync(file, 'utf8')
  if (!(typeof from === 'string' ? s.includes(from) : from.test(s))) throw new Error(`edit: ${from} not found in ${file}`)
  writeFileSync(file, s.replace(from, to))
}

// Each edit changes the tree in place. `units` says what it touches: one layer, `shared` (used by
// every layer), or `all` (config or dependencies).
function layerApp () {
  const L = (...p) => join(a.rootAbs, 'layers', ...p)
  const W7 = L('alarms/app/components/Alarms/AlarmsWidget7.vue')
  return [
    { name: 'none', units: '', apply () {} },
    { name: 'template', units: 'alarms', apply: () => edit(W7, '<h3>{{ title }}', '<h3>Edited {{ title }}') },
    { name: 'script', units: 'alarms', apply: () => edit(W7, 'bump()', 'bump(2)') },
    { name: 'style', units: 'alarms', apply: () => edit(W7, /padding: (\d+)px/, (_, n) => `padding: ${Number(n) + 1}px`) },
    { name: 'layer-composable', units: 'alarms', apply: () => edit(L('alarms/app/composables/useAlarmsState2.ts'), 'count.value += by', 'count.value += by * 2') },
    { name: 'layer-types', units: 'alarms', apply: () => edit(L('alarms/app/types.ts'), '  highlight?: string', '  highlight?: string\n  edited?: boolean') },
    { name: 'page', units: 'kpis', apply: () => edit(L('kpis/app/pages/kpis/kpis-p2.vue'), 'page 2 (', 'page 2 edited (') },
    { name: 'server-route', units: 'alarms', apply: () => edit(L('alarms/server/api/alarms/alarms-r3.get.ts'), 'Math.min(100,', 'Math.min(200,') },
    { name: 'add-composable', units: 'alarms', apply: () => writeFileSync(L('alarms/app/composables/useAlarmsExtra.ts'), 'export function useAlarmsExtra () { return 42 }\n') },
    { name: 'remove-page', units: 'alarms', apply: () => rmSync(L('alarms/app/pages/alarms/alarms-p10.vue')) },
    // A layer stops or starts using another layer's component: changes which exports of the
    // other layer are rendered (tree shaking, scoped CSS via cssScopeTo).
    { name: 'remove-usage', units: 'alarms', apply: () => edit(W7, / *<Core\w+ title="\w+" :items="\[\]" \/>\n/, '') },
    { name: 'add-usage', units: 'alarms', apply: () => edit(W7, '    </footer>', '      <UiTabs title="UiTabs" :items="[]" />\n    </footer>') },
    { name: 'shared-composable', units: 'shared', apply: () => edit(L('core/app/composables/useCoreState0.ts'), 'count.value += by', 'count.value += by * 2') },
    { name: 'shared-component', units: 'shared', apply: () => edit(L('ui/app/components/Ui/UiButton.vue'), '<h3>{{ title }}', '<h3>UI {{ title }}') },
    {
      name: 'app-override', units: 'shared', apply () {
        const dir = join(a.rootAbs, 'app/app/components')
        mkdirSync(dir, { recursive: true })
        copyFileSync(L('ui/app/components/Ui/UiButton.vue'), join(dir, 'UiButton.vue'))
        edit(join(dir, 'UiButton.vue'), '<h3>', '<h3 class="app-override">')
        edit(join(dir, 'UiButton.vue'), "'../../types'", "'../../../layers/ui/app/types'")
      },
    },
    // An env var no key prefix names, read by the config into `vite.define` (app.vue prints it).
    { name: 'env-define', units: 'all', env: { DEPLOY_FLAVOR: 'blue' }, apply () {} },
    { name: 'layer-config', units: 'all', apply: () => edit(L('alarms/nuxt.config.ts'), "$meta: { name: 'alarms' }", "$meta: { name: 'alarms' }, runtimeConfig: { public: { alarmsFlag: true } }") },
    { name: 'dependency', units: 'all', apply: () => appendFileSync(a.modulesYamlAbs, '\n# dependency bump\n') },
  ]
}

// Plain Vite app: units are workspace packages (packages/<unit>).
function viteApp () {
  const U = (...p) => join(a.rootAbs, ...p)
  const w0 = U('packages/alarms/src/components/AlarmsWidget0.vue')
  return [
    { name: 'none', units: '', apply () {} },
    { name: 'template', units: 'alarms', apply: () => edit(w0, '<h3>{{ title }}', '<h3>Edited {{ title }}') },
    { name: 'style', units: 'alarms', apply: () => edit(w0, 'padding: 15px', 'padding: 16px') },
    { name: 'css-file', units: 'alarms', apply: () => edit(U('packages/alarms/src/styles/alarms-theme.css'), '--alarms-gap: 14px', '--alarms-gap: 15px') },
    { name: 'layer-composable', units: 'alarms', apply: () => edit(U('packages/alarms/src/composables/useAlarmsState0.ts'), 'count0.value += by', 'count0.value += by * 2') },
    { name: 'layer-types', units: 'alarms', apply: () => edit(U('packages/alarms/src/types/alarms-types.ts'), '  updatedAt?: string', '  updatedAt?: string\n  edited?: boolean') },
    { name: 'page', units: 'kpis', apply: () => edit(U('packages/kpis/src/pages/KpisHome.vue'), '<h1>Kpis page 0', '<h1>Kpis page 0 edited') },
    { name: 'shared-component', units: 'shared', apply: () => edit(U('packages/ui/src/components/UiButton.vue'), '<h3>{{ title }}', '<h3>UI {{ title }}') },
    { name: 'dependency', units: 'all', apply: () => appendFileSync(a.modulesYamlAbs, '\n# dependency bump\n') },
  ]
}

useRolldown('fork')
const patchStamp = sh('node', [join(S, 'scripts/patches.mjs'), 'apply']).match(/stamp (\w+)/)[1]
const rolldownStamp = sh('git', ['-C', realpathSync(join(S, 'vendor/rolldown')), 'rev-parse', '--short', 'HEAD']).trim()
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

function compare (ref) {
  const r = spawnSync('node', [join(S, 'scripts/normdiff.mjs'), join(ref, 'output'), a.outputAbs, '--show', '2'], { encoding: 'utf8', maxBuffer: 1 << 26 })
  let equal = r.status === 0, text = r.stdout
  copyTypes(join(OUT, 'types-inc'))
  if (existsSync(join(ref, 'types')) || existsSync(join(OUT, 'types-inc'))) {
    const t = spawnSync('diff', ['-rq', join(ref, 'types'), join(OUT, 'types-inc')], { encoding: 'utf8' })
    if (t.status !== 0) { equal = false; text = `types differ\n${t.stdout}${t.stderr}${text}` }
  }
  return { equal, text }
}

// A clean reference depends on the tree, the installed patches, the Rolldown artifacts and the
// build env, not on the incremental code path, so it is built once per tree and kept.
function reference (hash, change) {
  const dir = join(S, 'results/refs', a.name, hash)
  if (existsSync(join(dir, 'meta.json'))) return { dir, ...JSON.parse(readFileSync(join(dir, 'meta.json'), 'utf8')) }
  const b = build(a, `${change.name}-clean`, OUT, change.env)
  rmSync(dir, { recursive: true, force: true })
  mkdirSync(dir, { recursive: true })
  cpSync(a.outputAbs, join(dir, 'output'), { recursive: true })
  copyTypes(join(dir, 'types'))
  const meta = { wall: b.wall, label: change.name, rolldownStamp, rolldownArtifact, date: new Date().toISOString() }
  writeFileSync(join(dir, 'meta.json'), JSON.stringify(meta))
  return { dir, ...meta }
}

restore(a)
if (args.includes('--rebase') || !existsSync(join(BASE, 'registry.json'))) {
  rmSync(BASE, { recursive: true, force: true })
  console.log(`base snapshot recorded: wall ${build(a, 'base-record', OUT, { EXP_RD_CACHE: BASE }).wall}s`)
}

const changes = (a.kind === 'vite' ? viteApp() : layerApp()).filter(c => !only || only.includes(c.name))
const tsv = join(OUT, 'summary.tsv')
writeFileSync(tsv, 'change\tunits\tinc_wall\tclean_wall\treused(client/ssr/nitro)\trerun(client/ssr/nitro)\tverdict\n')
let mismatches = 0
const walls = []
for (const change of changes) {
  restore(a)
  change.apply()
  const ref = reference(treeHash(a, [patchStamp, rolldownArtifact, JSON.stringify(a.env), JSON.stringify(change.env ?? {})]), change)
  rmSync(RUN, { recursive: true, force: true })
  sh('cp', ['-al', BASE, RUN])
  const inc = build(a, `${change.name}-inc`, OUT, { EXP_RD_CACHE: RUN, ...change.env })
  const cmp = compare(ref.dir)
  writeFileSync(join(OUT, `${change.name}.diff.txt`), cmp.text)
  if (!cmp.equal) {
    mismatches++
    cpSync(a.outputAbs, join(OUT, `${change.name}.output`), { recursive: true })
  }
  const reused = inc.stats.map(s => s.reused).join('/')
  const rerun = inc.stats.map(s => s.missing + s.changed + s.invalidated + s.excluded).join('/')
  const verdict = cmp.equal ? 'equal' : `MISMATCH ${cmp.text.split('\n')[0]}`
  appendFileSync(tsv, [change.name, change.units, inc.wall.toFixed(1), ref.wall.toFixed(1), reused, rerun, verdict].join('\t') + '\n')
  walls.push(inc.wall)
  console.log(`${change.name.padEnd(22)} inc ${inc.wall.toFixed(1)}s (clean ${ref.wall.toFixed(1)}s) rerun ${rerun} ${verdict}`)
}
restore(a)
const score = median(walls)
writeFileSync(join(OUT, 'score.json'), JSON.stringify({ tag, app: a.name, score, mismatches, changes: walls.length, rolldownStamp, patchStamp }, null, 2))
console.log(`\nscore (median incremental wall) ${score.toFixed(1)}s over ${walls.length} changes, mismatches ${mismatches}\nresults in ${OUT}`)
process.exitCode = mismatches ? 1 : 0
