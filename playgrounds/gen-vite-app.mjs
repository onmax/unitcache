// Generates a plain Vite + Vue SPA made of units, the non-Nuxt test case for
// the unit build cache.
// Usage: node gen-vite-app.mjs <outDir> [--units 8] [--components 170]
//          [--pages 12] [--composables 20] [--utils 12] [--sections 8] [--seed 1]
// --sections sets the collapsible sections per SFC (±1), i.e. the size of each file.
// Layout: <outDir>/packages/<unit> are workspace packages (@va/<unit>), the
// last two feature units are plain folders under <outDir>/src/units/<unit>.
// `ui` is used by every unit, `core` by every feature; features use only
// core and ui, except one explicit cross-feature component import. Each
// feature has typed SFCs with scoped styles, CSS files, auto-imported
// composables and utils, a JSON import, lazy route pages and one dynamic
// import() of a heavier module. units.ts lists the units for vite.config.ts.
// File basenames are unique across units, so output names never depend on
// module processing order.
// Imports of another unit name the file extension (package exports map paths
// verbatim). Rerunning replaces src/ and packages/*/src; run `pnpm install` again when
// the unit set changes.
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const argv = process.argv.slice(2)
const out = argv[0]
if (!out || out.startsWith('--')) throw new Error('usage: node gen-vite-app.mjs <outDir> [--units 8] [--components 170] [--pages 12] [--seed 1]')
const opt = (k, d) => { const i = argv.indexOf(`--${k}`); return i > 0 ? Number(argv[i + 1]) : d }
const N = { units: opt('units', 8), components: opt('components', 170), pages: opt('pages', 12), composables: opt('composables', 20), utils: opt('utils', 12), sections: opt('sections', 8) }
let seed = opt('seed', 1)
const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296 }
const pick = a => a[Math.floor(rnd() * a.length)]
const int = (a, b) => a + Math.floor(rnd() * (b - a + 1))
const pascal = s => s.split(/[-_]/).map(w => w[0].toUpperCase() + w.slice(1)).join('')
const write = (p, s) => { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, s.replace(/^\n/, '')) }
const json = v => JSON.stringify(v, null, 2) + '\n'

const FEATURES = ['dashboard', 'alarms', 'kpis', 'reports', 'admin', 'settings', 'billing', 'audit', 'inventory', 'planning', 'quality', 'energy']
const features = FEATURES.slice(0, Math.max(2, N.units - 2))
const folderUnits = new Set(features.slice(-2))
const unitNames = ['ui', 'core', ...features]
// The one cross-feature import: the second feature uses a widget of the first.
const cross = { from: features[1], to: features[0] }
const UI = ['Button', 'Card', 'Badge', 'Table', 'Modal', 'Input', 'Select', 'Tabs', 'Stat', 'Empty']
const VERSIONS = { vite: '8.3.5', vue: '3.5.44', 'vue-router': '5.4.0', typescript: '6.0.3', '@vitejs/plugin-vue': '6.0.10', 'unplugin-vue-components': '32.1.0', 'unplugin-auto-import': '21.1.0' }

const units = unitNames.map((name) => {
  const folder = folderUnits.has(name)
  return {
    name,
    P: pascal(name),
    folder,
    dir: folder ? `src/units/${name}` : `packages/${name}/src`,
    // How code outside the unit imports it.
    spec: folder ? `@units/${name}` : `@va/${name}`,
    nComp: name === 'ui' ? Math.max(UI.length, Math.round(N.components / 3)) : name === 'core' ? Math.max(4, Math.round(N.components / 4)) : N.components,
  }
})
const byName = Object.fromEntries(units.map(u => [u.name, u]))
const ui = byName.ui, core = byName.core

function types (P) {
  let s = ''
  for (let i = 0; i < 6; i++) {
    s += `
export interface ${P}Item${i} {
  id: string
  title: string
  value: number
  status: 'ok' | 'warn' | 'error' | 'unknown'
  tags?: string[]
  updatedAt?: string
  meta?: Record<string, string | number>
}

export interface ${P}Props${i} {
  title: string
  items?: ${P}Item${i}[]
  dense?: boolean
  limit?: number
  highlight?: string
  mode?: 'list' | 'grid' | 'table'
}
`
  }
  return s
}

function util (P, j) {
  return `
export interface ${P}FormatOptions${j} { precision?: number, unit?: string, locale?: string }

export function format${P}${j} (value: number | string | undefined, options: ${P}FormatOptions${j} = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? ${j % 3})
  return options.unit ? \`\${fixed} \${options.unit}\` : fixed
}

export function group${P}${j}<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const ${P[0].toLowerCase() + P.slice(1)}Thresholds${j} = Object.freeze({ low: ${int(1, 30)}, mid: ${int(31, 60)}, high: ${int(61, 99)} })
`
}

// Module-level refs stand in for Nuxt's useState: one shared store per composable.
function composable (P, k, utils) {
  const u = int(0, utils - 1)
  return `
const count${k} = ref(${int(0, 9)})
const items${k} = shallowRef<{ id: string, status: string, value: number }[]>([])

export function use${P}State${k} (initial = ${int(0, 9)}) {
  const grouped = computed(() => group${P}${u}(items${k}.value))
  const label = computed(() => format${P}${u}(count${k}.value, { precision: 1 }))
  function bump (by = 1) { count${k}.value += by }
  function reset () { count${k}.value = initial; items${k}.value = [] }
  return { count: count${k}, items: items${k}, grouped, label, bump, reset }
}
`
}

// Collapsible sections give each SFC the bulk of a real one (template,
// script and styles of a few hundred lines).
function sections (L, n) {
  const script = [], template = [], style = []
  for (let s = 0; s < n; s++) {
    script.push(`const section${s}Open = ref(${rnd() < 0.5})
const section${s}Rows = computed(() => visible.value
  .filter((item, idx) => idx % ${s + 2} === 0 || item.status === '${pick(['warn', 'error', 'unknown'])}')
  .map(item => ({ ...item, score: item.value * ${int(2, 9)} + ${s}, flagged: item.value > ${int(10, 90)} })))
const section${s}Total = computed(() => section${s}Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection${s} () {
  section${s}Open.value = !section${s}Open.value
  if (section${s}Open.value) bump(${s + 1})
}`)
    template.push(`<details :open="section${s}Open" class="sec sec-${s}" @toggle="toggleSection${s}">
      <summary>{{ title }} / ${pick(['Overview', 'Trends', 'History', 'Limits', 'Owners', 'Notes', 'Events', 'Usage'])} ({{ section${s}Rows.length }}, {{ section${s}Total.toFixed(1) }})</summary>
      <dl v-for="row in section${s}Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(${s % 3}) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section${s}Rows.length" class="empty">No rows in section ${s}</p>
      <label class="note">Note <input v-model="notes[${s}]" :name="\`${L}-note-${s}\`" maxlength="${int(40, 200)}"></label>
      <button v-if="notes[${s}]" type="button" class="clear" @click="notes[${s}] = ''">Clear</button>
    </details>`)
    style.push(`.sec-${s} { margin-top: ${int(2, 12)}px; border-top: ${int(1, 3)}px ${pick(['solid', 'dashed', 'dotted'])} #${int(100000, 999999)}; }
.sec-${s} summary { font-weight: ${pick([400, 500, 600, 700])}; cursor: pointer; }
.sec-${s} .row { display: grid; grid-template-columns: ${int(80, 200)}px 1fr auto; gap: ${int(2, 10)}px; }
.sec-${s} .row.flagged dt { text-decoration: underline; color: #${int(100000, 999999)}; }`)
  }
  return { script: script.join('\n'), template: template.join('\n      '), style: style.join('\n') }
}

function component (U, i) {
  const { name: L, P } = U
  const t = i % 6
  const sameUnit = i > 0 ? Array.from({ length: int(0, 2) }, () => `${P}Widget${int(0, i - 1)}`) : []
  const uiChildren = L === 'ui' ? [] : Array.from({ length: int(1, 3) }, () => `Ui${pick(UI)}`)
  const coreChildren = L === 'ui' || L === 'core' ? [] : [`CorePanel${int(0, core.nComp - 1)}`]
  const children = [...new Set([...sameUnit, ...uiChildren, ...coreChildren])]
  const lazy = L !== 'ui' && rnd() < 0.15
  const k = int(0, N.composables - 1), u = int(0, N.utils - 1)
  const sec = sections(L, int(N.sections - 1, N.sections + 1))
  const tablesCss = L !== 'ui' && L !== 'core' && i === 1 ? `import '../styles/${L}-tables.css'\n` : ''
  return `
<script setup lang="ts">
${tablesCss}import type { ${P}Props${t}, ${P}Item${t} } from '../types/${L}-types'
${lazy ? `\nconst UiChart = defineAsyncComponent(() => import('${ui.spec}/lazy/UiChart.vue'))\n` : ''}
const props = withDefaults(defineProps<${P}Props${t} & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: ${int(5, 50)},
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: ${P}Item${t}], close: [] }>()
const { count, label, bump } = use${P}State${k}()
const expanded = ref(false)
const query = ref('')
const route = useRoute()
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => format${P}${u}(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: '${pick(['kW', '%', 'pcs', 'h', '€'])}' }))
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: ${P}Item${t}) {
  bump()
  emit('select', item)
}
const notes = reactive<string[]>([])
${sec.script}
</script>

<template>
  <section :class="['${L}-w${i}', \`is-\${variant}\`, { dense }]" :data-path="route.path">
    <header class="head">
      <h3>{{ title }} <small>{{ label }}</small></h3>
      <input v-model="query" type="search" :placeholder="\`Filter \${title}\`">
      <button type="button" @click="expanded = !expanded">{{ expanded ? 'Less' : 'More' }}</button>
    </header>
    <ul v-if="mode === 'list'" class="list">
      <li v-for="item in visible" :key="item.id" :class="item.status" @click="onSelect(item)">
        <span class="title">{{ item.title }}</span>
        <span class="value">{{ item.value }}</span>
        <span v-for="tag in item.tags ?? []" :key="tag" class="tag">{{ tag }}</span>
      </li>
    </ul>
    <table v-else-if="mode === 'table'" class="table">
      <tr v-for="item in visible" :key="item.id"><td>{{ item.title }}</td><td>{{ item.status }}</td><td>{{ item.value }}</td></tr>
    </table>
    <div v-else class="grid">
      <article v-for="item in visible" :key="item.id" class="cell">{{ item.title }}: {{ item.value }}</article>
    </div>
    ${sec.template}
    <footer class="foot">
      <span>{{ summary }}</span><span>{{ count }}</span>
      ${children.map(c => `<${c} title="${c}" :items="[]" />`).join('\n      ')}${lazy ? '\n      <UiChart v-if="expanded" :points="points" />' : ''}
    </footer>
  </section>
</template>

<style scoped>
.${L}-w${i} { display: grid; gap: ${int(2, 16)}px; padding: ${int(4, 24)}px; border: 1px solid #${int(100000, 999999)}; }
.${L}-w${i}.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: ${int(12, 20)}px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(${int(2, 4)}, 1fr); }
.foot { display: flex; gap: 12px; opacity: .${int(5, 9)}; }
.note input { width: ${int(8, 30)}ch; } .clear { margin-left: 4px; } .empty { color: #888; }
${sec.style}
</style>
`
}

function page (U, n, kind) {
  const { name: L, P } = U
  const widgets = [...new Set(Array.from({ length: int(3, 6) }, () => `${P}Widget${int(0, U.nComp - 1)}`))]
  const home = kind === 'home'
  const crossImport = home && L === cross.from ? `import ${byName[cross.to].P}Widget0 from '${byName[cross.to].spec}/components/${byName[cross.to].P}Widget0.vue'\n` : ''
  if (crossImport) widgets.push(`${byName[cross.to].P}Widget0`)
  const heavy = home
    ? `
const report = shallowRef<string[]>([])
async function loadReport () {
  const { build${P}Report } = await import('../heavy/${L}-heavy')
  report.value = build${P}Report(${int(20, 80)})
}
`
    : ''
  return `
<script setup lang="ts">
${home ? `import '../styles/${L}-theme.css'\nimport { ${L}Catalog } from '../utils/${L}Catalog'\n` : ''}${crossImport}
const route = useRoute()
const { count } = use${P}State${int(0, N.composables - 1)}()
onMounted(() => { document.title = \`${P} ${n} \${route.params.${L}Id ?? ''}\` })
${heavy}</script>

<template>
  <div class="page ${L}-p${n}">
    <h1>${P} page ${n} ({{ count }})</h1>
    ${home ? `<p class="catalog">{{ ${L}Catalog.length }} catalog entries</p>\n    <button type="button" @click="loadReport">Report</button>\n    <pre v-if="report.length">{{ report.join('\\n') }}</pre>\n    ` : ''}${widgets.map(w => `<${w} title="${w}" />`).join('\n    ')}
  </div>
</template>

<style scoped>
.${L}-p${n} { display: grid; gap: ${int(8, 24)}px; }
</style>
`
}

// A module only reached through import(): long tables and many small functions.
function heavyModule (U) {
  const { name: L, P } = U
  let s = `import '../styles/${L}-print.css'\nimport { coreRows } from '${core.spec}/utils/coreRows.ts'\n\n`
  const fns = []
  for (let i = 0; i < 60; i++) {
    const rows = Array.from({ length: 12 }, () => `[${int(0, 999)}, ${int(0, 999)}, '${pick(['ok', 'warn', 'error'])}']`).join(', ')
    s += `const ${L}Table${i}: [number, number, string][] = [${rows}]\n`
    s += `function ${L}Section${i} (scale: number): string {\n  const sum = ${L}Table${i}.reduce((acc, [a, b]) => acc + a * scale - b, 0)\n  return \`${P} section ${i}: \${sum} (\${${L}Table${i}.filter(r => r[2] !== 'ok').length} flagged)\`\n}\n\n`
    fns.push(`${L}Section${i}`)
  }
  s += `export function build${P}Report (scale: number): string[] {\n  return [${fns.map(f => `${f}(scale)`).join(', ')}, ...coreRows(3).map(r => r.title)]\n}\n`
  return s
}

function catalogJson (U) {
  return json(Array.from({ length: 40 }, (_, i) => ({ id: `${U.name}-${i}`, label: `${U.P} entry ${i}`, weight: int(1, 100), group: pick(['a', 'b', 'c', 'd']) })))
}

function css (U, kind) {
  const { name: L } = U
  return `
.${L}-${kind} { --${L}-accent: #${int(100000, 999999)}; --${L}-gap: ${int(2, 20)}px; }
.${L}-${kind} h1 { color: var(--${L}-accent); letter-spacing: .${int(1, 9)}px; }
${Array.from({ length: 12 }, (_, i) => `.${L}-${kind}-r${i} { margin: ${int(0, 12)}px ${int(0, 12)}px; border-left: ${int(1, 4)}px solid #${int(100000, 999999)}; }`).join('\n')}
`
}

function routesFile (U) {
  const { name: L, P } = U
  const pages = [
    `{ path: '/${L}', name: '${L}-home', component: () => import('./pages/${P}Home.vue') }`,
    `{ path: '/${L}/item/:${L}Id', name: '${L}-detail', component: () => import('./pages/${P}Detail.vue') }`,
    ...Array.from({ length: N.pages - 2 }, (_, n) => `{ path: '/${L}/p${n + 2}', name: '${L}-p${n + 2}', component: () => import('./pages/${P}Page${n + 2}.vue') }`),
  ]
  return `
import type { RouteRecordRaw } from 'vue-router'

function ${L}Guard (to: { query: Record<string, unknown> }) {
  if (to.query.denied === '${L}') return '/'
}

export const ${L}Routes: RouteRecordRaw[] = [
  ${pages.map(p => p.replace(/ }$/, `, beforeEnter: ${L}Guard }`)).join(',\n  ')},
]
`
}

// Clear generated sources; keep node_modules and remove packages of dropped units.
rmSync(join(out, 'src'), { recursive: true, force: true })
if (existsSync(join(out, 'packages'))) {
  for (const d of readdirSync(join(out, 'packages'))) {
    const keep = units.some(u => !u.folder && u.name === d)
    rmSync(join(out, 'packages', d, keep ? 'src' : ''), { recursive: true, force: true })
  }
}

const deps = (U) => {
  const d = {}
  if (U.name !== 'ui') d['@va/ui'] = 'workspace:*'
  if (U.name !== 'ui' && U.name !== 'core') d['@va/core'] = 'workspace:*'
  if (U.name === cross.from && !byName[cross.to].folder) d[`@va/${cross.to}`] = 'workspace:*'
  return d
}

for (const U of units) {
  const { name: L, P } = U
  const base = join(out, U.dir)
  if (!U.folder) {
    write(join(out, 'packages', L, 'package.json'), json({
      name: `@va/${L}`,
      version: '0.0.0',
      private: true,
      type: 'module',
      exports: { './*': './src/*' },
      ...(Object.keys(deps(U)).length ? { dependencies: deps(U) } : {}),
    }))
  }
  write(join(base, `types/${L}-types.ts`), types(P))
  for (let j = 0; j < N.utils; j++) write(join(base, `utils/format${P}${j}.ts`), util(P, j))
  for (let k = 0; k < N.composables; k++) write(join(base, `composables/use${P}State${k}.ts`), composable(P, k, N.utils))
  const compName = L === 'core' ? i => `CorePanel${i}` : i => `${P}Widget${i}`
  if (L === 'ui') {
    for (const name of UI) write(join(base, `components/Ui${name}.vue`), component(U, UI.indexOf(name)).replace('<section', `<section data-ui="${name}"`))
    write(join(base, 'lazy/UiChart.vue'), `
<script setup lang="ts">
const props = defineProps<{ points: number[] }>()
const max = computed(() => Math.max(1, ...props.points))
</script>

<template>
  <svg viewBox="0 0 100 20" class="chart"><rect v-for="(p, i) in points" :key="i" :x="i * 4" :y="20 - p / max * 20" width="3" :height="p / max * 20" /></svg>
</template>

<style scoped>
.chart { width: 100%; height: 40px; fill: currentColor; }
</style>
`)
    write(join(base, 'styles/ui-base.css'), css(U, 'base'))
    write(join(base, 'layouts/UiLayout.vue'), `
<template>
  <div class="layout"><nav><slot name="nav" /></nav><slot /></div>
</template>

<style scoped>
.layout { display: grid; grid-template-columns: 200px 1fr; gap: 16px; }
</style>
`)
  }
  for (let i = 0; i < U.nComp; i++) {
    let code = component(U, i)
    if (L === 'core') code = code.replace(/CoreWidget(\d+)/g, 'CorePanel$1')
    write(join(base, `components/${compName(i)}.vue`), code)
  }
  if (L === 'core') {
    write(join(base, 'utils/coreRows.ts'), `
export interface CoreRow { id: string, title: string, value: number, status: 'ok' | 'warn' }

export function coreRows (n: number, seed = ${int(1, 99)}): CoreRow[] {
  return Array.from({ length: n }, (_, i) => ({ id: \`core-\${i}\`, title: \`Core \${i}\`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
`)
  }
  if (L !== 'ui' && L !== 'core') {
    write(join(base, `pages/${P}Home.vue`), page(U, 0, 'home'))
    write(join(base, `pages/${P}Detail.vue`), page(U, 1, 'detail'))
    for (let n = 2; n < N.pages; n++) write(join(base, `pages/${P}Page${n}.vue`), page(U, n, 'page'))
    write(join(base, `${L}Routes.ts`), routesFile(U))
    write(join(base, `heavy/${L}-heavy.ts`), heavyModule(U))
    write(join(base, `data/${L}-catalog.json`), catalogJson(U))
    write(join(base, `utils/${L}Catalog.ts`), `
import catalog from '../data/${L}-catalog.json'
import { coreRows } from '${core.spec}/utils/coreRows.ts'

export const ${L}Catalog = catalog.filter(entry => entry.weight > ${int(5, 30)})
export const ${L}Seed = coreRows(${int(2, 6)})
`)
    for (const kind of ['theme', 'tables', 'print']) write(join(base, `styles/${L}-${kind}.css`), css(U, kind))
  }
}

write(join(out, 'units.ts'), `
// Generated by playgrounds/gen-vite-app.mjs (${JSON.stringify(N)}).
// The units of this app: a workspace package or a plain folder, by source dir.
export interface Unit { name: string, dir: string, package?: string }

export const units: Unit[] = [
${units.map(u => `  { name: '${u.name}', dir: '${u.dir}'${u.folder ? '' : `, package: '@va/${u.name}'`} },`).join('\n')}
]
`)

write(join(out, 'package.json'), json({
  name: 'playground-vite-app',
  private: true,
  type: 'module',
  scripts: { build: 'vite build' },
  dependencies: {
    vue: VERSIONS.vue,
    'vue-router': VERSIONS['vue-router'],
    ...Object.fromEntries(units.filter(u => !u.folder).map(u => [`@va/${u.name}`, 'workspace:*'])),
  },
  devDependencies: {
    vite: VERSIONS.vite,
    '@vitejs/plugin-vue': VERSIONS['@vitejs/plugin-vue'],
    typescript: VERSIONS.typescript,
    'unplugin-auto-import': VERSIONS['unplugin-auto-import'],
    'unplugin-vue-components': VERSIONS['unplugin-vue-components'],
    unitcache: 'link:../../packages/core',
  },
  pnpm: { overrides: { rolldown: 'link:../../vendor/rolldown' } },
}))
write(join(out, 'pnpm-workspace.yaml'), `
packages:
  - packages/*
overrides:
  rolldown: link:../../vendor/rolldown
`)

// String.raw keeps the regex escapes as written; the config avoids template literals.
write(join(out, 'vite.config.ts'), String.raw`
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { unitcache } from 'unitcache'
import { defineConfig } from 'vite'
import { units } from './units.ts'

const root = fileURLToPath(new URL('.', import.meta.url))
// EXP_UNIT_GROUPS=1: unitcache (packages/core) groups each unit's modules in chunks of their own,
// split by entry.
const unitGroups = process.env.EXP_UNIT_GROUPS === '1'

export default defineConfig({
  resolve: {
    alias: units.filter(u => !u.package).map(u => ({ find: '@units/' + u.name, replacement: root + u.dir })),
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: units.flatMap(u => [u.dir + '/composables', u.dir + '/utils']),
      dts: false,
    }),
    Components({
      dirs: units.map(u => u.dir + '/components'),
      dts: false,
    }),
    ...(unitGroups ? [unitcache({ units: units.map(u => ({ name: u.name, roots: [root + u.dir] })) })] : []),
  ],
  build: {
    sourcemap: false,
  },
})
`)

write(join(out, 'tsconfig.json'), json({
  compilerOptions: {
    target: 'ES2022',
    module: 'ESNext',
    moduleResolution: 'bundler',
    strict: true,
    jsx: 'preserve',
    noEmit: true,
    allowImportingTsExtensions: true,
    resolveJsonModule: true,
    skipLibCheck: true,
    types: ['vite/client'],
    paths: Object.fromEntries(units.filter(u => u.folder).map(u => [`@units/${u.name}/*`, [`./${u.dir}/*`]])),
  },
  include: ['src', 'packages/*/src', 'units.ts', 'vite.config.ts'],
}))

write(join(out, 'index.html'), `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vite unit app</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`)
write(join(out, 'src/env.d.ts'), `
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
`)
write(join(out, 'src/main.ts'), `
import { createApp } from 'vue'
import '${ui.spec}/styles/ui-base.css'
import App from './App.vue'
import { router } from './router'

createApp(App).use(router).mount('#app')
`)
write(join(out, 'src/router.ts'), `
import { createRouter, createWebHistory } from 'vue-router'
${features.map(f => `import { ${f}Routes } from '${byName[f].spec}/${f}Routes.ts'`).join('\n')}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('./HomePage.vue') },
${features.map(f => `    ...${f}Routes,`).join('\n')}
  ],
})
`)
write(join(out, 'src/App.vue'), `
<script setup lang="ts">
import UiLayout from '${ui.spec}/layouts/UiLayout.vue'
</script>

<template>
  <UiLayout>
    <template #nav>
      <RouterLink to="/">home</RouterLink>
${features.map(f => `      <RouterLink to="/${f}">${f}</RouterLink>`).join('\n')}
    </template>
    <RouterView />
  </UiLayout>
</template>
`)
write(join(out, 'src/HomePage.vue'), `
<template>
  <main>
    <h1>vite unit app</h1>
    <UiCard title="Units" />
  </main>
</template>
`)

const vue = units.reduce((n, u) => n + u.nComp + (u.name === 'ui' ? UI.length + 2 : 0) + (u.name === 'ui' || u.name === 'core' ? 0 : N.pages), 0) + 2
console.log(JSON.stringify({ units: units.length, packages: units.filter(u => !u.folder).map(u => u.name), folders: [...folderUnits], vue, pages: features.length * N.pages, composables: units.length * N.composables, utils: units.length * N.utils }))
