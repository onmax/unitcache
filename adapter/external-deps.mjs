// node external-deps.mjs <cacheDir> <out.json> <root>...
// Files the build cache depends on that the environment-skip fingerprint doesn't hash: outside
// every app/layer root and outside node_modules (covered by the lockfiles in the key). Written
// with each file's content hash next to a skip snapshot; a skip is used only while they all match.
// Runs in the background save, so it costs the build nothing. Each environment's build writes the
// dependencies of every entry, plus every file it watched (which covers modules Rolldown could not
// cache), to `<cacheDir>/<env>/build-deps.json`.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { depHash, TSCONFIG_DEP } from './dep-hash.mjs'

const [dir, out, ...roots] = process.argv.slice(2)
const files = new Set()
const outside = p => !p.includes('/node_modules/') && !roots.some(root => p.startsWith(root.endsWith('/') ? root : `${root}/`))
for (const env of readdirSync(dir, { withFileTypes: true }).filter(d => d.isDirectory())) {
  const deps = join(dir, env.name, 'build-deps.json')
  // The adapter removes these lists before a build; an environment with cache entries but no list
  // failed to write it (Rolldown only warns), so this build's dependencies are unknown.
  if (!existsSync(deps)) {
    if (!existsSync(join(dir, env.name, 'build-v1'))) continue
    console.error(`[exp:snapshot] ${deps} missing: the build cache could not write it, no skip snapshot saved`)
    process.exit(1)
  }
  // A tsconfig inside a root can extend one outside every root, so tsconfig dependencies are
  // always listed (hashed with every file they extend, see dep-hash.mjs).
  for (const p of JSON.parse(readFileSync(deps, 'utf8'))) if ((outside(p) || p.endsWith(TSCONFIG_DEP)) && !p.startsWith('\0')) files.add(p)
}
let hashes
try {
  hashes = Object.fromEntries([...files].sort().map(p => [p, depHash(p)]))
} catch (err) {
  console.error(`[exp:snapshot] ${err.message}: no skip snapshot saved`)
  process.exit(1)
}
writeFileSync(out, JSON.stringify(hashes))
