// node scripts/dep-hash.test.mjs checks that the whole-build skip sees every change to a dependency Rolldown
// lists in build-deps.json, in the encodings it writes.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { depHash, stripJsonc, TSCONFIG_DEP, tsconfigFiles } from '../adapter/dep-hash.mjs'

const S = join(import.meta.dirname, '..')
mkdirSync(join(S, 'tmp'), { recursive: true })
const root = mkdtempSync(join(S, 'tmp', 'dep-hash-'))
const write = (p, s) => { mkdirSync(join(root, p, '..'), { recursive: true }); writeFileSync(join(root, p), s) }
let failed = 0
const test = (name, fn) => {
  try { fn(); console.log(`ok ${name}`) } catch (err) { failed++; console.log(`FAIL ${name}\n${err.stack}`) }
}

try {
  test('a file by content, missing as null', () => {
    write('a.js', 'A')
    const before = depHash(join(root, 'a.js'))
    write('a.js', 'B')
    assert.notEqual(depHash(join(root, 'a.js')), before)
    assert.equal(depHash(join(root, 'none.js')), null)
  })

  test('entries named by a prefix', () => {
    write('src/foo.js', '')
    const dep = `${join(root, 'src')}\0foo`
    const before = depHash(dep)
    write('src/bar.js', '')
    assert.equal(depHash(dep), before)
    write('src/foo.ts', '')
    assert.notEqual(depHash(dep), before)
  })

  test('retargeting a link further along a symlink chain', () => {
    write('links/a.js', 'AAA')
    write('links/b.js', 'BBB')
    symlinkSync('a.js', join(root, 'links/middle.js'))
    symlinkSync('middle.js', join(root, 'links/dep.js'))
    const dep = `${join(root, 'links')}\0dep`
    const before = depHash(dep)
    unlinkSync(join(root, 'links/middle.js'))
    symlinkSync('b.js', join(root, 'links/middle.js'))
    assert.notEqual(depHash(dep), before)
  })

  test('a watched directory whose link is retargeted', () => {
    write('ext/a.txt', 'AAA')
    write('ext/b.txt', 'BBB')
    symlinkSync('a.txt', join(root, 'ext/link.txt'))
    const before = depHash(join(root, 'ext'))
    unlinkSync(join(root, 'ext/link.txt'))
    symlinkSync('b.txt', join(root, 'ext/link.txt'))
    assert.notEqual(depHash(join(root, 'ext')), before)
  })

  test('a tsconfig by every file it extends, outside its folder too', () => {
    write('base.json', '{ "compilerOptions": { "paths": { "x": ["./a.js"] } } }')
    write('app/tsconfig.json', '{\n  // app config\n  "extends": "../base.json",\n}\n')
    const dep = join(root, 'app/tsconfig.json') + TSCONFIG_DEP
    assert.deepEqual(tsconfigFiles(join(root, 'app/tsconfig.json')), [join(root, 'app/tsconfig.json'), join(root, 'base.json')])
    const before = depHash(dep)
    write('base.json', '{ "compilerOptions": { "paths": { "x": ["./b.js"] } } }')
    assert.notEqual(depHash(dep), before)
  })

  test('JSONC: comments and trailing commas, strings left alone', () => {
    const text = '{ "a": "x // not a comment, }", /* c */ "b": [1, 2,], // end\n "c": "/*s*/", }'
    assert.deepEqual(JSON.parse(stripJsonc(text)), { a: 'x // not a comment, }', b: [1, 2], c: '/*s*/' })
  })

  test('JSONC: a trailing comma before a comment or a long run of whitespace', () => {
    const text = `{ "extends": "./b.json", // base\n "x": [1, /* last */], "y": 2,${' '.repeat(300)}\n}`
    assert.deepEqual(JSON.parse(stripJsonc(text)), { extends: './b.json', x: [1], y: 2 })
  })

  test('a tsconfig that can not be read or extends what can not be found throws', () => {
    write('bad/tsconfig.json', '{ "extends": ')
    assert.throws(() => depHash(join(root, 'bad/tsconfig.json') + TSCONFIG_DEP), /cannot read/)
    write('bad/tsconfig.json', '{ "extends": "no-such-package/tsconfig" }')
    assert.throws(() => depHash(join(root, 'bad/tsconfig.json') + TSCONFIG_DEP), /cannot resolve/)
  })

  test('entries of a path that is a file count as none', () => {
    write('plain.js', '')
    assert.equal(depHash(`${join(root, 'plain.js')}\0index`), null)
  })

  test('a file replaced by a directory of the same name', () => {
    write('swap/dep.js', 'A')
    const dep = `${join(root, 'swap')}\0dep`
    const before = depHash(dep)
    rmSync(join(root, 'swap/dep.js'))
    write('swap/dep.js/index.js', 'A')
    assert.notEqual(depHash(dep), before)
  })

  test('collector: lists a tsconfig inside a root, hashes it with what it extends', () => {
    write('cache/client/build-v1/.keep', '')
    const tsconfig = join(root, 'app/tsconfig.json')
    write('cache/client/build-deps.json', JSON.stringify([tsconfig + TSCONFIG_DEP, join(root, 'app/src/x.js')]))
    const out = join(root, 'external.json')
    const collect = () => {
      execFileSync(process.execPath, [join(S, 'adapter/external-deps.mjs'), join(root, 'cache'), out, join(root, 'app')])
      return JSON.parse(readFileSync(out, 'utf8'))
    }
    const before = collect()
    assert.deepEqual(Object.keys(before), [tsconfig + TSCONFIG_DEP])
    write('base.json', '{ "compilerOptions": { "paths": { "x": ["./c.js"] } } }')
    assert.notEqual(collect()[tsconfig + TSCONFIG_DEP], before[tsconfig + TSCONFIG_DEP])
  })

  test('collector: exits 1 when a tsconfig chain can not be followed', () => {
    write('app/tsconfig.json', '{ "extends": "../base.json", ')
    const run = () => execFileSync(process.execPath, [join(S, 'adapter/external-deps.mjs'), join(root, 'cache'), join(root, 'x.json'), join(root, 'app')], { stdio: 'pipe' })
    assert.throws(run, (err) => err.status === 1)
  })
} finally {
  rmSync(root, { recursive: true, force: true })
}
if (failed) {
  console.log(`${failed} failed`)
  process.exit(1)
}
