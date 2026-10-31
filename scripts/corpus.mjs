// Change corpora for check.mjs and bench.mjs. A corpus is a function of the app (see lab.mjs)
// returning changes; each change edits the app's tree in place (the runner restores it from git
// before the next one). `units` says what a change touches: one layer, `shared` (core/ui, used by
// every layer), or `all` (config or dependencies).
import { appendFileSync, copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

function editRe (file, re, fn) {
  const s = readFileSync(file, 'utf8')
  if (!re.test(s)) throw new Error(`edit: ${re} not found in ${file}`)
  writeFileSync(file, s.replace(re, fn))
}

function edit (file, from, to) {
  const s = readFileSync(file, 'utf8')
  if (!s.includes(from)) throw new Error(`edit: ${from} not found in ${file}`)
  writeFileSync(file, s.replace(from, to))
}

// Generated layer apps (big3, layers26): same generator, same first 12 layer names.
function layerApp (a) {
  const L = (...p) => join(a.rootAbs, 'layers', ...p)
  const W7 = L('alarms/app/components/Alarms/AlarmsWidget7.vue')
  return [
    { name: 'none', units: '', apply () {} },
    { name: 'template', units: 'alarms', apply: () => edit(W7, '<h3>{{ title }}', '<h3>Edited {{ title }}') },
    { name: 'script', units: 'alarms', apply: () => edit(W7, 'bump()', 'bump(2)') },
    { name: 'style', units: 'alarms', apply: () => editRe(W7, /padding: (\d+)px/, (_, n) => `padding: ${Number(n) + 1}px`) },
    { name: 'layer-composable', units: 'alarms', apply: () => edit(L('alarms/app/composables/useAlarmsState2.ts'), 'count.value += by', 'count.value += by * 2') },
    { name: 'layer-types', units: 'alarms', apply: () => edit(L('alarms/app/types.ts'), '  highlight?: string', '  highlight?: string\n  edited?: boolean') },
    { name: 'page', units: 'kpis', apply: () => edit(L('kpis/app/pages/kpis/kpis-p2.vue'), 'page 2 (', 'page 2 edited (') },
    { name: 'server-route', units: 'alarms', apply: () => edit(L('alarms/server/api/alarms/alarms-r3.get.ts'), 'Math.min(100,', 'Math.min(200,') },
    { name: 'add-composable', units: 'alarms', apply: () => writeFileSync(L('alarms/app/composables/useAlarmsExtra.ts'), 'export function useAlarmsExtra () { return 42 }\n') },
    { name: 'remove-page', units: 'alarms', apply: () => rmSync(L('alarms/app/pages/alarms/alarms-p10.vue')) },
    // A consumer in one layer stops or starts using another layer's component: changes which
    // exports of the other layer are rendered (tree shaking, scoped CSS via cssScopeTo).
    { name: 'remove-usage', units: 'alarms', apply: () => editRe(W7, / *<Core\w+ title="\w+" :items="\[\]" \/>\n/, '') },
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

// Plain Vite app: units are workspace packages (packages/<unit>) and folders (src/units/<unit>).
function viteApp (a) {
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

export const corpora = {
  scripted (a) {
    if (a.name === 'big3' || a.name === 'layers26') return layerApp(a)
    if (a.name === 'vite') return viteApp(a)
    throw new Error(`no scripted corpus for ${a.name}`)
  },
}
