import assert from 'node:assert/strict'
import { cpSync, mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { indexUnits, unitKeys } from '../src/index.ts'
import { changedUnits } from '../src/keys.ts'

test('a module belongs to the unit with the longest root, not through node_modules', () => {
  const index = indexUnits([
    { name: 'app', roots: ['/r/app'] },
    { name: 'inner', roots: ['/r/app/layers/inner'] },
    { name: 'pkg', roots: ['/r/app/node_modules/pkg'] },
  ])
  assert.equal(index.of('/r/app/pages/a.vue')?.name, 'app')
  assert.equal(index.of('/r/app/layers/inner/x.ts')?.name, 'inner')
  assert.equal(index.of('/r/app/layers/inner/x.vue?vue&type=style&index=0')?.name, 'inner')
  assert.equal(index.of('/r/app/node_modules/pkg/dist/i.js')?.name, 'pkg')
  assert.equal(index.of('/r/app/node_modules/vue/index.js'), undefined)
  assert.equal(index.of('/r/app/node_modules/pkg/node_modules/dep/i.js'), undefined)
  assert.equal(index.of('\0virtual:app'), undefined)
  assert.equal(index.of('/r/application/x.ts'), undefined)
})

test('two units with one name are an error', () => {
  assert.throws(() => indexUnits([{ name: 'a', roots: ['/x'] }, { name: 'a', roots: ['/y'] }]), /two units named "a"/)
})

test('a unit key changes with its own files only, not with a unit nested inside', () => {
  const dir = mkdtempSync(join(import.meta.dirname, '../.tmp/keys-'))
  try {
    cpSync(join(import.meta.dirname, 'fixture'), dir, { recursive: true })
    const units = indexUnits([
      { name: 'outer', roots: [join(dir, 'units')] },
      { name: 'b', roots: [join(dir, 'units/b')] },
    ]).units
    const before = unitKeys(units)
    writeFileSync(join(dir, 'units/b/helper.js'), 'export const helper = s => s\n')
    const after = unitKeys(units)
    assert.deepEqual(changedUnits(after, before), ['b'])
    writeFileSync(join(dir, 'units/new.js'), '')
    assert.deepEqual(changedUnits(unitKeys(units), after), ['outer'])
    assert.deepEqual(changedUnits(after), ['outer', 'b'])
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test('a workspace package linked into node_modules is hashed by content; a retargeted link changes the key', () => {
  const dir = mkdtempSync(join(import.meta.dirname, '../.tmp/link-'))
  try {
    for (const p of ['ws/pkg/src', 'app/node_modules', 'app/src/x', 'app/src/y']) mkdirSync(join(dir, p), { recursive: true })
    writeFileSync(join(dir, 'ws/pkg/package.json'), '{"name":"pkg","version":"1.0.0"}')
    writeFileSync(join(dir, 'ws/pkg/src/a.js'), 'one')
    symlinkSync(join(dir, 'ws/pkg'), join(dir, 'app/node_modules/pkg'))
    const pkg = indexUnits([{ name: 'pkg', roots: [join(dir, 'app/node_modules/pkg')] }]).units
    const k1 = unitKeys(pkg)
    writeFileSync(join(dir, 'ws/pkg/src/a.js'), 'two')
    assert.deepEqual(changedUnits(unitKeys(pkg), k1), ['pkg'])

    symlinkSync(join(dir, 'app/src/x'), join(dir, 'app/src/link'))
    const app = indexUnits([{ name: 'app', roots: [join(dir, 'app/src')] }]).units
    const k2 = unitKeys(app)
    rmSync(join(dir, 'app/src/link'))
    symlinkSync(join(dir, 'app/src/y'), join(dir, 'app/src/link'))
    assert.deepEqual(changedUnits(unitKeys(app), k2), ['app'])
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test('a bare root is a folder of the app when it exists, and a linked root keeps its link path', () => {
  const dir = mkdtempSync(join(import.meta.dirname, '../.tmp/roots-'))
  try {
    mkdirSync(join(dir, 'src'), { recursive: true })
    mkdirSync(join(dir, 'ws/pkg'), { recursive: true })
    mkdirSync(join(dir, 'node_modules'), { recursive: true })
    writeFileSync(join(dir, 'ws/pkg/package.json'), '{"name":"pkg"}')
    symlinkSync(join(dir, 'ws/pkg'), join(dir, 'node_modules/pkg'))
    const index = indexUnits([{ name: 'src', roots: ['src'] }, { name: 'pkg', roots: ['pkg'] }], dir)
    assert.equal(index.of(join(dir, 'src/a.ts'))?.name, 'src')
    assert.equal(index.of(join(dir, 'ws/pkg/i.js'))?.name, 'pkg')
    assert.equal(index.of(join(dir, 'node_modules/pkg/i.js'))?.name, 'pkg')
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})
