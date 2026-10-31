// Usage: node diff.mjs <before.json> <after.json>
// Matches files by path, then pairs renamed hashed files by their stem.
import { readFileSync } from 'node:fs'

const [a, b] = process.argv.slice(2).map(f => JSON.parse(readFileSync(f, 'utf8')))
const stem = p => p.replace(/[-.][A-Za-z0-9_-]{8}(?=\.(m?js|css)(\.map)?$)/, '').replace(/meta\/[0-9a-f-]{36}\.json$/, 'meta/<buildId>.json')
const same = [], changed = [], added = [], removed = []
for (const p of Object.keys(b)) {
  if (!(p in a)) added.push(p)
  else if (a[p].sha === b[p].sha) same.push(p)
  else changed.push(p)
}
for (const p of Object.keys(a)) if (!(p in b)) removed.push(p)
const renamed = []
for (const p of [...added]) {
  const s = stem(p)
  const q = removed.find(r => stem(r) === s)
  if (q) { renamed.push(`${q} -> ${p}`); added.splice(added.indexOf(p), 1); removed.splice(removed.indexOf(q), 1) }
}
const total = Object.keys(b).length
console.log(`total ${total} | identical ${same.length} | changed in place ${changed.length} | renamed (new hash) ${renamed.length} | added ${added.length} | removed ${removed.length}`)
for (const [k, v] of Object.entries({ changed, renamed, added, removed })) if (v.length) console.log(`  ${k}:\n    ` + v.sort().join('\n    '))
