// node scripts/normdiff.test.mjs checks that the comparator accepts hash renames and the known
// nondeterminism, and rejects real differences hidden in the same places.
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'

const NORMDIFF = join(import.meta.dirname, 'normdiff.mjs')
const table = entries => `var public_assets_data_default = {\n${entries.map(([url, type, size, mtime]) => `\t"${url}": {\n\t\t"type": "${type}",\n\t\t"etag": "\\"${size}-x${mtime}\\"",\n\t\t"mtime": "2026-10-29T20:34:4${mtime}.929Z",\n\t\t"size": ${size},\n\t\t"path": "../public${url}"\n\t}`).join(',\n')}\n};\nexport { public_assets_data_default };\n`
const serverAssets = mtime => `// #nitro/virtual/server-assets\nvar _assets = {\n\t["i18n:a.json"]: {\n\t\timport: () => import("../a.json.mjs"),\n\t\tmeta: {\n\t\t\t"type": "application/json",\n\t\t\t"mtime": "${mtime}"\n\t\t}\n\t}\n};\nexport const built = "2026-01-01T00:00:00.000Z";\n`
// Nuxt's SSR styles map as strictExecutionOrder emits it (inside an init function).
const wrappedStyles = (...entries) => `var init_styles = __esmMin((() => {\n\tstyles_default = {\n${entries.map(([k, v]) => `\t\t"${k}": () => import("./${v}-styles.mjs")`).join(',\n')}\n\t};\n}));\n`
const base = {
  'public/_nuxt/AAAAAAAA.js': 'import "./BBBBBBBB.js";\nconsole.log(1);\nconsole.log(2);\n',
  'public/_nuxt/BBBBBBBB.js': 'export const b = 1;\n',
  'public/_nuxt/CCCCCCCC.js': 'export const c = 1;\n',
  'public/logo.bin': Buffer.from([0x80, 0x01]),
  'server/index.mjs': table([['/a.js', 'text/javascript', 10, 1], ['/b.png', 'image/png', 20, 2]]),
  'nitro.json': '{\n  "date": "2026-10-30T05:54:14.520Z",\n  "preset": "node-server"\n}\n',
  'public/_nuxt/builds/latest.json': '{"id":"fixed-0001","timestamp":1793339628017}',
  'public/_nuxt/deadline.js': 'export const deadline = "2026-01-01T00:00:00.000Z";\n',
  'public/data.json': '{"timestamp":123}',
  'public/builds/latest.json': '{"date":"2026-01-01","timestamp":1}',
  'server/_libs/h3.mjs': serverAssets('2026-10-30T05:55:05.240Z'),
  'server/_ssr/ssr.mjs': '// .nuxt/vite/services/ssr/_nuxt/rest~index-DVep9zxU.js\nexport const ssr = 1;\n',
  'server/_ssr/ssr.mjs.map': JSON.stringify({ version: 3, sources: ['../../.nuxt/vite/services/ssr/_nuxt/rest~index-DVep9zxU.js'], sourcesContent: ['x'], mappings: '' }),
  'server/_ssr/live.mjs': 'export const f = "../.nuxt/vite/services/ssr/_nuxt/rest~index-DVep9zxU.js";\n',
  'server/_ssr/rest~styles-DavEz3R_.mjs': wrappedStyles(['a.vue', 'a'], ['b.vue', 'b']),
}
const tree = files => {
  const dir = mkdtempSync(join(tmpdir(), 'normdiff-'))
  for (const [p, c] of Object.entries(files)) { mkdirSync(dirname(join(dir, p)), { recursive: true }); writeFileSync(join(dir, p), c) }
  return dir
}
const equal = (a, b) => { try { execFileSync('node', [NORMDIFF, a, b], { stdio: 'pipe' }); return true } catch { return false } }

const cases = [
  ['intermediate SSR file hash in a comment', { ...base, 'server/_ssr/ssr.mjs': base['server/_ssr/ssr.mjs'].replace('DVep9zxU', 'DQB3yFcN') }, true],
  ['intermediate SSR file hash in source map sources', { ...base, 'server/_ssr/ssr.mjs.map': base['server/_ssr/ssr.mjs.map'].replace('DVep9zxU', 'DQB3yFcN') }, true],
  ['intermediate SSR name in sourcesContent', { ...base, 'server/_ssr/ssr.mjs.map': base['server/_ssr/ssr.mjs.map'].replace('["x"]', '["../.nuxt/vite/services/ssr/_nuxt/rest~index-DQB3yFcN.js"]') }, false],
  ['intermediate SSR name in code, other hash', { ...base, 'server/_ssr/live.mjs': 'export const f = "../.nuxt/vite/services/ssr/_nuxt/rest~index-DQB3yFcN.js";\n' }, false],
  ['intermediate SSR file renamed', { ...base, 'server/_ssr/ssr.mjs': base['server/_ssr/ssr.mjs'].replace('rest~index', 'rest~other') }, false],
  ['grouped styles map order', { ...Object.fromEntries(Object.entries(base).filter(([p]) => !p.includes('rest~styles'))), 'server/_ssr/rest~styles-CTFostgH.mjs': wrappedStyles(['b.vue', 'b'], ['a.vue', 'a']) }, true],
  ['grouped styles map entry changed', { ...base, 'server/_ssr/rest~styles-DavEz3R_.mjs': wrappedStyles(['a.vue', 'c'], ['b.vue', 'b']) }, false],
  ['identical', base, true],
  ['consistent hash rename', { ...Object.fromEntries(Object.entries(base).filter(([p]) => !p.includes('BBBBBBBB')).map(([p, c]) => [p, typeof c === 'string' ? c.replace('BBBBBBBB', 'DDDDDDDD') : c])), 'public/_nuxt/DDDDDDDD.js': base['public/_nuxt/BBBBBBBB.js'] }, true],
  ['asset table order and mtime', { ...base, 'server/index.mjs': table([['/b.png', 'image/png', 20, 7], ['/a.js', 'text/javascript', 10, 8]]) }, true],
  ['reordered statements', { ...base, 'public/_nuxt/AAAAAAAA.js': 'import "./BBBBBBBB.js";\nconsole.log(2);\nconsole.log(1);\n' }, false],
  ['swapped asset type and size', { ...base, 'server/index.mjs': table([['/a.js', 'image/png', 20, 1], ['/b.png', 'text/javascript', 10, 2]]) }, false],
  ['import redirected to another existing chunk', { ...base, 'public/_nuxt/AAAAAAAA.js': 'import "./CCCCCCCC.js";\nconsole.log(1);\nconsole.log(2);\n' }, false],
  ['build times', { ...base, 'nitro.json': base['nitro.json'].replace('05:54:14.520', '06:01:02.003'), 'public/_nuxt/builds/latest.json': '{"id":"fixed-0001","timestamp":1793339999999}' }, true],
  ['application date changed', { ...base, 'public/_nuxt/deadline.js': 'export const deadline = "2027-01-01T00:00:00.000Z";\n' }, false],
  ['application timestamp changed', { ...base, 'public/data.json': '{"timestamp":999}' }, false],
  ['server asset mtime', { ...base, 'server/_libs/h3.mjs': serverAssets('2026-10-30T04:44:44.189Z') }, true],
  ['date next to the server assets table', { ...base, 'server/_libs/h3.mjs': serverAssets('2026-10-30T05:55:05.240Z').replace('2026-01-01', '2027-01-01') }, false],
  ['unchanged file still importing a renamed chunk', { ...Object.fromEntries(Object.entries(base).filter(([p]) => !p.includes('BBBBBBBB'))), 'public/_nuxt/DDDDDDDD.js': base['public/_nuxt/BBBBBBBB.js'] }, false],
  ['application builds file', { ...base, 'public/builds/latest.json': '{"date":"2027-01-01","timestamp":9}' }, false],
  ['manifest field other than the build time', { ...base, 'public/_nuxt/builds/latest.json': '{"id":"fixed-0002","timestamp":1793339628017}' }, false],
  ['binary byte changed', { ...base, 'public/logo.bin': Buffer.from([0x81, 0x01]) }, false],
]
const a = tree(base)
let failed = 0
for (const [name, files, expected] of cases) {
  const b = tree(files)
  const got = equal(a, b)
  console.log(`${got === expected ? 'ok  ' : 'FAIL'} ${name}: ${got ? 'equal' : 'different'}`)
  if (got !== expected) failed++
  rmSync(b, { recursive: true })
}
rmSync(a, { recursive: true })
process.exitCode = failed ? 1 : 0
