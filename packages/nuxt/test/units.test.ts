import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { nuxtAggregate, nuxtUnits } from '../src/module.ts'

function tree () {
  mkdirSync(join(import.meta.dirname, '../.tmp'), { recursive: true })
  const root = mkdtempSync(join(import.meta.dirname, '../.tmp/units-'))
  const files: Record<string, string> = {
    'app/package.json': '{"name":"app"}',
    'app/node_modules/nuxt-mod/package.json': '{"name":"nuxt-mod","main":"dist/module.mjs"}',
    'app/node_modules/nuxt-mod/dist/module.mjs': '',
    'app/node_modules/pub-layer/package.json': '{"name":"pub-layer"}',
    'app/node_modules/@scope/esm-mod/package.json': '{"name":"@scope/esm-mod","type":"module","exports":{".":{"import":"./dist/module.mjs"}}}',
    'app/node_modules/@scope/esm-mod/dist/module.mjs': '',
    'layers/base/modules/local/index.ts': '',
    'package.json': '{"name":"workspace"}',
    'tools/loose-module.ts': '',
  }
  for (const [p, c] of Object.entries(files)) { mkdirSync(join(root, p, '..'), { recursive: true }); writeFileSync(join(root, p), c) }
  return root
}

test('layers and installed module packages become units; a module inside a layer stays in it', () => {
  const root = tree()
  try {
    const app = join(root, 'app')
    const nuxt = {
      options: {
        rootDir: app,
        modulesDir: [join(app, 'node_modules')],
        _layers: [
          { cwd: app, config: { rootDir: app } },
          { cwd: join(root, 'layers/base'), config: { rootDir: join(root, 'layers/base') } },
          { cwd: join(app, 'node_modules/pub-layer'), config: { rootDir: join(app, 'node_modules/pub-layer') }, meta: { name: 'pub' } },
        ],
        _installedModules: [
          { meta: { name: 'nuxt-mod' }, entryPath: 'nuxt-mod' },
          { meta: { name: '@scope/esm-mod' }, entryPath: '@scope/esm-mod' },
          { meta: { name: 'local' }, entryPath: join(root, 'layers/base/modules/local/index.ts') },
          { meta: { name: 'inline' } },
          { meta: { name: 'loose' }, entryPath: join(root, 'tools/loose-module.ts') },
        ],
      },
    }
    assert.deepEqual(nuxtUnits(nuxt).map(u => [u.name, u.kind, u.roots]), [
      ['app', 'layer', [app]],
      ['layer:base', 'layer', [join(root, 'layers/base')]],
      ['layer:pub', 'layer', [join(app, 'node_modules/pub-layer')]],
      ['module:nuxt-mod', 'module', [join(app, 'node_modules/nuxt-mod')]],
      ['module:@scope/esm-mod', 'module', [join(app, 'node_modules/@scope/esm-mod')]],
    ])
    assert.deepEqual(nuxtUnits(nuxt, { modules: false }).map(u => u.name), ['app', 'layer:base', 'layer:pub'])
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('templates and virtual Nuxt ids are aggregates', () => {
  const aggregate = nuxtAggregate({ options: { rootDir: '/r/app', buildDir: '/r/app/.nuxt' } })
  assert.ok(aggregate('virtual:nuxt:.nuxt%2Fimports.mjs'))
  assert.ok(aggregate('\0virtual:nuxt:.nuxt%2Fcomponents.plugin.mjs'))
  assert.ok(aggregate('/r/app/.nuxt/routes.mjs'))
  assert.ok(!aggregate('/r/app/components/Foo.vue'))
  assert.ok(!aggregate('/r/app/.nuxtrc.js'))
})
