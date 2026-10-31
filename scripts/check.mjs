#!/usr/bin/env node
// The check: for each edit below, build the edited tree incrementally from the base snapshot and
// clean, and compare the normalized outputs and generated types. Exits 1 on any mismatch.
//
// Usage: node scripts/check.mjs --app dashboard [--only a,b] [--rebase] [--tag name]
//   --rebase  rebuild the base snapshot from the committed tree
// The playground's sources must be committed: the runner restores them from git between edits.
import { spawnSync } from 'node:child_process'
import { appendFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { app as getApp, build, median, restore, rolldownArtifactHash, S, sh, treeHash, useRolldown } from './lab.mjs'

const args = process.argv.slice(2)
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i < 0 ? def : args[i + 1] }
const a = getApp(opt('app', 'dashboard'))
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

// Each edit changes the app's tree in place, one kind of change per case.
const none = { name: 'none', apply () {} }
const dependency = { name: 'dependency', apply: () => appendFileSync(a.modulesYamlAbs, '\n# dependency bump\n') }
const edits = {
  dashboard (F) {
    const stats = F('app/components/home/HomeStats.vue')
    return [
      none,
      { name: 'template', apply: () => edit(stats, '{{ stat.value }}', '{{ stat.value }} edited') },
      { name: 'script', apply: () => edit(stats, 'maximumFractionDigits: 0', 'maximumFractionDigits: 1') },
      // A utility class no file used before: Tailwind's CSS, which reads every template, changes.
      { name: 'tailwind-class', apply: () => edit(stats, 'class="text-xs"', 'class="text-xs tracking-[0.37em]"') },
      { name: 'css-file', apply: () => edit(F('app/assets/css/main.css'), '--color-green-50: #EFFDF5;', '--color-green-50: #EFFDF6;') },
      { name: 'composable', apply: () => edit(F('app/composables/useDashboard.ts'), "'g-h': () => router.push('/')", "'g-h': () => router.push('/?home')") },
      { name: 'util', apply: () => edit(F('app/utils/index.ts'), 'array[Math.floor(Math.random() * array.length)]!', 'array[Math.floor(Math.random() * array.length) % array.length]!') },
      { name: 'types', apply: () => edit(F('app/types/index.d.ts'), '  location: string', '  location: string\n  edited?: boolean') },
      { name: 'page', apply: () => edit(F('app/pages/inbox.vue'), 'title="Inbox"', 'title="Inbox (edited)"') },
      { name: 'server-route', apply: () => edit(F('server/api/customers.ts'), "location: 'New York, USA'", "location: 'Boston, USA'") },
      {
        name: 'add-component', apply () {
          writeFileSync(F('app/components/home/HomeNote.vue'), '<template>\n  <p>note</p>\n</template>\n')
          edit(stats, '  </UPageGrid>', '    <HomeNote />\n  </UPageGrid>')
        },
      },
      { name: 'remove-page', apply: () => rmSync(F('app/pages/settings/security.vue')) },
      { name: 'app-config', apply: () => edit(F('app/app.config.ts'), "primary: 'green'", "primary: 'blue'") },
      { name: 'nuxt-config', apply: () => edit(F('nuxt.config.ts'), 'cors: true', "cors: true,\n      headers: { 'x-edited': '1' }") },
      dependency,
    ]
  },
  saas (F) {
    return [
      none,
      { name: 'template', apply: () => edit(F('app/components/AppHeader.vue'), "label: 'Docs'", "label: 'Docs (edited)'") },
      { name: 'page', apply: () => edit(F('app/pages/pricing.vue'), "label: 'Monthly'", "label: 'Monthly (edited)'") },
      { name: 'tailwind-class', apply: () => edit(F('app/components/AppHeader.vue'), 'class="w-auto h-6 shrink-0"', 'class="w-auto h-6 shrink-0 tracking-[0.37em]"') },
      { name: 'css-file', apply: () => edit(F('app/assets/css/main.css'), '--color-green-50: #EFFDF5;', '--color-green-50: #EFFDF6;') },
      { name: 'og-image', apply: () => edit(F('app/components/OgImage/Saas.takumi.vue'), 'w-1.5 h-full', 'w-2 h-full') },
      { name: 'content-md', apply: () => edit(F('content/3.blog/2.pyrenees.md'), '## Introduction to the Pyrenean Wonderland', '## Introduction to the Pyrenean Wonderland (edited)') },
      { name: 'content-yml', apply: () => edit(F('content/2.pricing.yml'), 'title: A plan for every need', 'title: A plan for every need (edited)') },
      { name: 'content-add', apply: () => writeFileSync(F('content/4.changelog/11.edited.md'), '---\ntitle: "Edited"\ndescription: "A changelog entry added by the check."\ndate: "2025-05-01"\n---\n\nA new entry.\n') },
      { name: 'app-config', apply: () => edit(F('app/app.config.ts'), "primary: 'blue'", "primary: 'green'") },
      { name: 'nuxt-config', apply: () => edit(F('nuxt.config.ts'), "'/docs': { redirect: '/docs/getting-started', prerender: false }", "'/docs': { redirect: '/docs/getting-started', prerender: false },\n    '/pricing': { headers: { 'x-edited': '1' } }") },
      dependency,
    ]
  },
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
  if (!existsSync(dir)) return
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

const changes = edits[a.name](p => join(a.rootAbs, p)).filter(c => !only || only.includes(c.name))
const tsv = join(OUT, 'summary.tsv')
writeFileSync(tsv, 'change\tinc_wall\tclean_wall\treused(client/ssr/nitro)\trerun(client/ssr/nitro)\tverdict\n')
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
  appendFileSync(tsv, [change.name, inc.wall.toFixed(1), ref.wall.toFixed(1), reused, rerun, verdict].join('\t') + '\n')
  walls.push(inc.wall)
  console.log(`${change.name.padEnd(22)} inc ${inc.wall.toFixed(1)}s (clean ${ref.wall.toFixed(1)}s) rerun ${rerun} ${verdict}`)
}
restore(a)
const score = median(walls)
writeFileSync(join(OUT, 'score.json'), JSON.stringify({ tag, app: a.name, score, mismatches, changes: walls.length, rolldownStamp, patchStamp }, null, 2))
console.log(`\nscore (median incremental wall) ${score.toFixed(1)}s over ${walls.length} changes, mismatches ${mismatches}\nresults in ${OUT}`)
process.exitCode = mismatches ? 1 : 0
