import assert from 'node:assert/strict'
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { test } from 'node:test'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'
import { detectCapabilities, indexUnits, type Unit, UNIT_KEYS_FILE, unitcache } from '../src/index.ts'

function fixture () {
  const dir = mkdtempSync(join(import.meta.dirname, '../.tmp/build-'))
  cpSync(join(import.meta.dirname, 'fixture'), dir, { recursive: true })
  writeFileSync(join(dir, 'package.json'), '{"type":"module"}')
  return dir
}

async function chunks (dir: string, plugin?: ReturnType<typeof unitcache>) {
  const out = await build({ root: dir, logLevel: 'silent', configFile: false, plugins: plugin ?? [], build: { write: false, minify: false } }) as any
  return out.output.filter((o: any) => o.type === 'chunk').map((c: any) => ({ fileName: c.fileName as string, modules: (c.moduleIds as string[]).filter(id => !id.startsWith('\0')).map(id => relative(dir, id)) }))
}

const unitsOf = (dir: string): Unit[] => [{ name: 'a', roots: [join(dir, 'units/a')] }, { name: 'b', roots: [join(dir, 'units/b')] }]
const owner = (m: string) => m.startsWith('units/a/') ? 'a' : m.startsWith('units/b/') ? 'b' : 'none'

test('without the plugin, a chunk mixes units (the fixture tests something)', async () => {
  const dir = fixture()
  try {
    const mixed = (await chunks(dir)).filter(c => new Set(c.modules.map(owner)).size > 1)
    assert.ok(mixed.length > 0, 'expected a chunk holding modules of two units or of a unit and the app')
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('every chunk holds the modules of one unit, or of no unit', async () => {
  const dir = fixture()
  try {
    const list = await chunks(dir, unitcache({ units: unitsOf(dir) }))
    for (const c of list) assert.ok(new Set(c.modules.map(owner)).size <= 1, `${c.fileName}: ${c.modules.join(', ')}`)
    // Split by entry inside a unit: b's pages stay lazy and apart.
    const b = list.filter(c => c.modules.some(m => m.startsWith('units/b/')))
    assert.ok(b.length >= 3, b.map(c => c.modules.join('+')).join(' | '))
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('aggregate modules stay out of unit chunks', async () => {
  const dir = fixture()
  try {
    const list = await chunks(dir, unitcache({ units: [{ name: 'all', roots: [join(dir, 'units')] }], aggregate: id => id.endsWith('/units/a/shared.js') }))
    const shared = list.find(c => c.modules.includes('units/a/shared.js'))!
    assert.ok(shared.fileName.includes('aggregate') && shared.modules.every(m => m === 'units/a/shared.js' || !m.startsWith('units/')), `${shared.fileName}: ${shared.modules.join(', ')}`)
    assert.ok(list.some(c => c.fileName.includes('all') && c.modules.includes('units/b/helper.js')))
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('the change report names the units changed since the last successful build', async () => {
  const dir = fixture()
  const reportDir = join(dir, '.report')
  const seen: string[][] = []
  const plugin = () => unitcache({ units: unitsOf(dir), report: { dir: reportDir, onChanged: c => seen.push(c) } })
  try {
    await chunks(dir, plugin())
    assert.ok(existsSync(join(reportDir, UNIT_KEYS_FILE)))
    await chunks(dir, plugin())
    writeFileSync(join(dir, 'units/b/page.js'), readFileSync(join(dir, 'units/b/page.js'), 'utf8') + '\n// edit\n')
    await chunks(dir, plugin())
    assert.deepEqual(seen, [['a', 'b'], [], ['b']])
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

// The core package's `vite` runs on the lab's `rolldown` link, the fork when it is linked.
test('with the buildCache capability, each environment keeps its cache in its own dir', async (t) => {
  const caps = await detectCapabilities(join(import.meta.dirname, '..'))
  if (!caps.buildCache) return t.skip('stock rolldown linked')
  const dir = fixture()
  try {
    await chunks(dir, unitcache({ units: unitsOf(dir), cache: { dir: join(dir, '.cache'), key: 'k' } }))
    assert.ok(readdirSync(join(dir, '.cache/client')).includes('build-v1'))
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('no Vite to ask: no capabilities, grouping only', async () => {
  assert.deepEqual(await detectCapabilities('/'), {})
})

// Rolldown bug (fork and 1.2.x): in an SSR build, `getFileName` of an emitted chunk whose module a
// group captured returns the name with its hash placeholder unreplaced.
test('a chunk a plugin emitted from a unit module keeps a real file name (SSR)', async () => {
  const dir = fixture()
  const names: string[] = []
  let ref = ''
  const emitter = {
    name: 'emitter',
    transform (_code: string, id: string) {
      // Like Nuxt's SSR styles: a module only the emit reaches, named `<x>.mjs`.
      if (id.endsWith('/src/main.js')) ref = this.emitFile({ type: 'chunk', id: join(dir, 'units/b/styles.js'), name: 'b-styles-1.mjs' })
    },
    generateBundle () { names.push(this.getFileName(ref)) },
  }
  try {
    writeFileSync(join(dir, 'units/b/styles.js'), 'export default ".b{}"\n')
    const out = await build({ root: dir, logLevel: 'silent', configFile: false, plugins: [emitter, unitcache({ units: unitsOf(dir) })], build: { write: false, minify: false, ssr: join(dir, 'src/main.js') } }) as any
    assert.equal(names.length, 1)
    assert.doesNotMatch(names[0], /!~\{/)
    assert.ok(out.output.some((o: any) => o.fileName === names[0]), names[0])
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

// An SSR build of `files` (paths relative to a fresh dir), with units A and B; returns the dir.
async function ssrBuild (files: Record<string, string>, plugins: (dir: string) => any[], output: object = {}) {
  const dir = mkdtempSync(join(import.meta.dirname, '../.tmp/ssr-'))
  for (const [p, c] of Object.entries({ 'package.json': '{"type":"module"}', ...files })) { mkdirSync(join(dir, p, '..'), { recursive: true }); writeFileSync(join(dir, p), c) }
  const out = await build({ root: dir, logLevel: 'silent', configFile: false, plugins: plugins(dir), build: { ssr: join(dir, 'src/main.js'), outDir: join(dir, 'dist'), minify: false, rolldownOptions: { output } } }) as any
  const chunks = (Array.isArray(out) ? out[0] : out).output.filter((o: any) => o.type === 'chunk').map((c: any) => ({ fileName: c.fileName as string, modules: (c.moduleIds as string[]).filter(i => !i.startsWith('\0')).map(i => relative(dir, i)) }))
  return { dir, chunks }
}
const abUnits = (dir: string) => [{ name: 'A', roots: [join(dir, 'A')] }, { name: 'B', roots: [join(dir, 'B')] }]

test('modules of different units run in import order', async () => {
  const { dir } = await ssrBuild({
    'src/main.js': "import '../A/init.js'\nimport '../B/set.js'\nimport '../A/check.js'\nexport const log = globalThis.log\n",
    'A/init.js': 'globalThis.log = ["init"]\n',
    'B/set.js': 'globalThis.log.push("set")\n',
    'A/check.js': 'globalThis.log.push(globalThis.log.includes("set") ? "check-ok" : "check-failed")\n',
  }, dir => [unitcache({ units: abUnits(dir) })])
  try {
    const mod = await import(pathToFileURL(join(dir, 'dist/main.js')).href)
    assert.deepEqual(mod.log, ['init', 'set', 'check-ok'])
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('a module another unit imports stays in its own unit', async () => {
  const { dir, chunks } = await ssrBuild({
    'src/main.js': "import { a } from '../A/a.js'\nexport const out = a\n",
    'A/a.js': "import { b } from '../B/b.js'\nexport const a = 'a+' + b\n",
    'B/b.js': "globalThis.seen = true\nexport const b = String(globalThis.seen)\n",
  }, dir => [unitcache({ units: abUnits(dir) })])
  try {
    for (const c of chunks) assert.ok(new Set(c.modules.map(m => m.split('/')[0]).filter(u => u === 'A' || u === 'B')).size <= 1, `${c.fileName}: ${c.modules}`)
    assert.ok(chunks.some(c => c.modules.includes('B/b.js') && c.fileName.includes('B')))
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('an environment that splits chunks its own way is left as is, with a warning', async () => {
  for (const output of [{ codeSplitting: { groups: [{ name: 'all', test: /./ }] } }, { codeSplitting: { minSize: 1000 } }, { manualChunks: () => 'one' }, { strictExecutionOrder: false }]) {
    const warned: string[] = []
    const logger = { name: 'capture', configResolved (c: any) { const w = c.logger.warn; c.logger.warn = (m: string, o?: any) => { warned.push(m); w(m, o) } } }
    const { dir, chunks } = await ssrBuild({
      'src/main.js': "import { a } from '../A/a.js'\nexport const out = a\n",
      'A/a.js': "export const a = 'a'\n",
    }, dir => [{ ...logger, enforce: 'pre' }, unitcache({ units: abUnits(dir) })], output)
    try {
      assert.ok(!chunks.some(c => c.fileName.includes('A~')), JSON.stringify(output))
      assert.match(warned.join('\n'), /no unit chunks in environment/)
    } finally { rmSync(dir, { recursive: true, force: true }) }
  }
})

test('one plugin used for two builds reports each change, and its report dir inside a unit is no input', async () => {
  const dir = fixture()
  const seen: string[][] = []
  const plugin = unitcache({ units: unitsOf(dir), report: { dir: join(dir, 'units/a/.report'), onChanged: c => seen.push(c) } })
  try {
    await chunks(dir, plugin)
    await chunks(dir, plugin)
    writeFileSync(join(dir, 'units/b/page.js'), readFileSync(join(dir, 'units/b/page.js'), 'utf8') + '\n// edit\n')
    await chunks(dir, plugin)
    assert.deepEqual(seen, [['a', 'b'], [], ['b']])
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('a package name root owns that installed package', async () => {
  const index = indexUnits([{ name: 'vue', roots: ['vue'] }], join(import.meta.dirname, '..'))
  const vueDir = index.units[0].roots[0]
  assert.ok(vueDir.includes('node_modules'), vueDir)
  assert.equal(index.of(join(vueDir, 'index.mjs'))?.name, 'vue')
})

test('styles stay out of unit chunks, in import order', async () => {
  const dir = mkdtempSync(join(import.meta.dirname, '../.tmp/css-'))
  const files: Record<string, string> = {
    'package.json': '{"type":"module"}',
    'index.html': '<!doctype html><script type="module" src="/src/main.js"></script>',
    'src/main.js': "import '../A/base.css'\nimport '../B/theme.css'\nimport '../A/override.css'\n",
    'A/base.css': '.x{color:red}.y{color:red}',
    'B/theme.css': '.x{color:green}.y{color:green}',
    'A/override.css': '.x{color:blue}',
  }
  for (const [p, c] of Object.entries(files)) { mkdirSync(join(dir, p, '..'), { recursive: true }); writeFileSync(join(dir, p), c) }
  try {
    const out = await build({ root: dir, logLevel: 'silent', configFile: false, plugins: [unitcache({ units: abUnits(dir) })], build: { write: false, minify: false } }) as any
    const css = out.output.filter((o: any) => o.fileName.endsWith('.css'))
    assert.equal(css.length, 1, css.map((c: any) => c.fileName).join(', '))
    const text = css[0].source.replace(/\s+/g, '')
    assert.ok(text.indexOf('.x{color:red}') < text.indexOf('.x{color:green}') && text.indexOf('.x{color:green}') < text.indexOf('.x{color:blue}'), text)
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('a library build keeps its entry signatures: no unit chunks, no error', async () => {
  const dir = fixture()
  try {
    const out = await build({ root: dir, logLevel: 'silent', configFile: false, plugins: [unitcache({ units: unitsOf(dir) })], build: { write: false, minify: false, lib: { entry: join(dir, 'src/main.js'), formats: ['es'] } } }) as any
    const list = (Array.isArray(out) ? out[0] : out).output
    assert.ok(!list.some((o: any) => /(^|\/)[ab]~/.test(o.fileName)), list.map((o: any) => o.fileName).join(', '))
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('the report keeps keys only after a build succeeds (build() and buildApp)', async () => {
  const dir = fixture()
  const reportDir = join(dir, '.report')
  const fail = { name: 'fail', generateBundle () { throw new Error('boom') } }
  try {
    await assert.rejects(build({ root: dir, logLevel: 'silent', configFile: false, plugins: [fail, unitcache({ units: unitsOf(dir), report: { dir: reportDir } })], build: { write: false } }))
    assert.ok(!existsSync(join(reportDir, UNIT_KEYS_FILE)), 'kept after a failed build()')
    const { createBuilder } = await import('vite')
    const failing = await createBuilder({ root: dir, logLevel: 'silent', configFile: false, plugins: [fail, unitcache({ units: unitsOf(dir), report: { dir: reportDir } })], build: { outDir: join(dir, 'dist') } })
    await assert.rejects(failing.buildApp())
    assert.ok(!existsSync(join(reportDir, UNIT_KEYS_FILE)), 'kept after a failed buildApp')
    const ok = await createBuilder({ root: dir, logLevel: 'silent', configFile: false, plugins: [unitcache({ units: unitsOf(dir), report: { dir: reportDir } })], build: { outDir: join(dir, 'dist') } })
    await ok.buildApp()
    assert.ok(existsSync(join(reportDir, UNIT_KEYS_FILE)), 'not kept after a successful buildApp')
  } finally { rmSync(dir, { recursive: true, force: true }) }
})

test('a build whose second output fails keeps no keys', async () => {
  const dir = fixture()
  const reportDir = join(dir, '.report')
  const fail = { name: 'fail', generateBundle (o: any) { if (o.entryFileNames === 'b.mjs') throw new Error('boom') } }
  try {
    await assert.rejects(build({ root: dir, logLevel: 'silent', configFile: false, plugins: [fail, unitcache({ units: unitsOf(dir), report: { dir: reportDir } })], build: { ssr: join(dir, 'src/main.js'), outDir: join(dir, 'dist'), rolldownOptions: { output: [{ entryFileNames: 'a.mjs' }, { entryFileNames: 'b.mjs' }] } } }))
    assert.ok(!existsSync(join(reportDir, UNIT_KEYS_FILE)))
  } finally { rmSync(dir, { recursive: true, force: true }) }
})
