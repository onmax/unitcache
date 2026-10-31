// node adapter/files.test.mjs checks that the adapter's per-file records (adapter/files.mjs) see every change
// a whole-content fingerprint saw, without reading every file when something changed.
import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, statSync, symlinkSync, utimesSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { digestOf, makeRecord, recordMatches, sameScan, scan } from './files.mjs'

const S = join(import.meta.dirname, '..')
mkdirSync(join(S, 'tmp'), { recursive: true })
const root = mkdtempSync(join(S, 'tmp', 'files-'))
const write = (p, s) => { mkdirSync(join(root, p, '..'), { recursive: true }); writeFileSync(join(root, p), s) }
const record = (extra = 'x', include) => {
  const now = scan([root])
  return makeRecord(now, extra, now.files.map(f => digestOf(f.path)), include)
}
let failed = 0
const test = (name, fn) => {
  try { fn(); console.log(`ok ${name}`) } catch (err) { failed++; console.log(`FAIL ${name}\n${err.stack}`) }
}

try {
  write('app/a.ts', 'export const a = 1')
  write('app/B.vue', '<template>b</template>')
  write('app/pages/index.vue', '<template>i</template>')
  write('node_modules/x/index.js', 'ignored')

  test('an unchanged tree matches, node_modules is not an input', () => {
    const r = record()
    assert.ok(recordMatches(r, scan([root]), 'x'))
    assert.ok(!r.files.some(([p]) => p.includes('node_modules')))
  })

  test('other extra inputs do not match', () => {
    assert.ok(!recordMatches(record('x'), scan([root]), 'y'))
  })

  test('a same-size rewrite that restores its mtime does not match, and changes the scan', () => {
    const r = record()
    const before = scan([root])
    const st = statSync(join(root, 'app/a.ts'))
    write('app/a.ts', 'export const a = 2')
    utimesSync(join(root, 'app/a.ts'), st.atime, st.mtime)
    assert.ok(!recordMatches(r, scan([root]), 'x'))
    assert.ok(!sameScan(before, scan([root])))
  })

  test('an added or removed file does not match', () => {
    const r = record()
    write('app/new.ts', '')
    assert.ok(!recordMatches(r, scan([root]), 'x'))
    rmSync(join(root, 'app/new.ts'))
    assert.ok(recordMatches(r, scan([root]), 'x'))
  })

  test('a retargeted symlink does not match', () => {
    write('other/one.ts', '1')
    write('other/two.ts', '2')
    symlinkSync(join(root, 'other/one.ts'), join(root, 'app/link.ts'))
    const r = record()
    rmSync(join(root, 'app/link.ts'))
    symlinkSync(join(root, 'other/two.ts'), join(root, 'app/link.ts'))
    assert.ok(!recordMatches(r, scan([root]), 'x'))
    rmSync(join(root, 'app/link.ts'))
  })

  test('with include, other files count by path only', () => {
    const types = f => !f.endsWith('.vue') || f.includes('/pages/')
    const r = record('x', types)
    write('app/B.vue', '<template>changed</template>')
    assert.ok(recordMatches(r, scan([root]), 'x', types))
    write('app/pages/index.vue', '<template>changed</template>')
    assert.ok(!recordMatches(r, scan([root]), 'x', types))
  })

  test('a file whose digest could not be read never matches', () => {
    const now = scan([root])
    const r = makeRecord(now, 'x', now.files.map((f, i) => (i === 0 ? null : digestOf(f.path))))
    assert.ok(!recordMatches(r, now, 'x'))
  })
} finally {
  rmSync(root, { recursive: true, force: true })
}
if (failed) {
  console.log(`${failed} failed`)
  process.exit(1)
}
