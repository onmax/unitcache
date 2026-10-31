// Usage: node normdiff.mjs <outputA> <outputB> [--show N] [--only <regex>]
// Compares two build output trees. Content hashes in file names may differ between two identical
// clean builds (Nitro's public-asset table carries mtimes, and hashes follow from it), so files are
// paired, a hash rename map A→B is built from the paired names, and every text file of A, with the
// map applied, must equal its B file byte for byte. One rename per hash: a reference that points to
// a different chunk in B than in A is a difference. The only other normalizations, each for
// nondeterminism two clean builds show:
// - ISO timestamps and `"timestamp": N` in text files;
// - hashes in the names of Nuxt's intermediate SSR files, in server region comments and source
//   map `sources` only (SSR_INTERMEDIATE);
// - Nitro's public-asset table: entries compared as a set keyed by URL, without `mtime` and `etag`
//   (the etag hashes content compared on its own); `type`, `size`, `path` must match per URL;
// - Nuxt's SSR styles map (`_ssr/styles-<hash>.mjs`): the entries of its object literals, and the
//   lists in their values, compared as sets (they are filled in module order, which varies);
// - ORDER_FREE files (see below): compared as sorted lines, with their source maps reduced to
//   sorted sources and names; the same reduction for the source map of the file holding the
//   asset table.
// Binary files (anything not in TEXT) must be byte-identical. Prints remaining differences.
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const args = process.argv.slice(2)
const [dirA, dirB] = args
const show = Number(args[args.indexOf('--show') + 1]) || 3
const only = args.includes('--only') ? new RegExp(args[args.indexOf('--only') + 1]) : undefined

const list = (dir) => {
  const out = []
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name)
      if (e.isDirectory()) walk(p)
      else out.push(relative(dir, p))
    }
  }
  walk(dir)
  return out.sort()
}

const TEXT = /\.(m?js|cjs|css|html?|json|map|txt|svg|xml|ts|vue|webmanifest)$/
// Files whose line order varies between identical clean builds (measured: `scripts/normdiff.mjs`
// with ORDER_FREE emptied, on two clean builds of each app).
// Nuxt's app manifest (default buildAssetsDir); an app's own `builds/*.json` elsewhere is output.
const MANIFEST = /^public\/_nuxt\/builds\/(latest|meta\/[^/]+)\.json$/
const ORDER_FREE = new RegExp(`^nitro\\.json$|${MANIFEST.source}`)
// A content hash in a file name: after `-`/`.`/`/`, or the whole basename (Nuxt 5 names client
// chunks by bare hash, `_nuxt/B-S8cvgi.js`).
const HASH = /(?<=[-./]|^)[A-Za-z0-9_-]{8}(?=\.(m?js|css)\b)/g
const stem = p => p.replace(HASH, '#').replace(/meta\/[^/]+\.json$/, 'meta/<id>.json')
const hashesOf = p => p.match(HASH) ?? []

const ASSETS_TABLE = /(var public_assets_data_default = \{\n)([\s\S]*?)(\n\};)/
const ENTRY = /\t("[^"\n]+"): \{\n([\s\S]*?)\n\t\}/g
function canonicalAssets (s) {
  return s.replace(ASSETS_TABLE, (_, open, body, close) => {
    const entries = [...body.matchAll(ENTRY)].map(([, key, fields]) =>
      `${key} ${fields.split('\n').map(l => l.trim().replace(/,$/, '')).filter(l => !/^"(mtime|etag)"/.test(l)).join(' ')}`)
    return `${open}${entries.sort().join('\n')}${close}`
  })
}

// (unitcache names it `rest~styles-<hash>.mjs`: a group name, then `~`.)
const STYLES_MAP = /(^|\/)_ssr\/(?:[\w-]+~)?styles[-.][A-Za-z0-9_-]{8}\.mjs$/
// Any indentation: `strictExecutionOrder` wraps the map in an init function.
const MAP_BLOCK = /(= \{\n)((?:\t+"[^"\n]+": [^\n]*\n)+)(\t*\};)/g
function canonicalStylesMap (s) {
  return s.replace(MAP_BLOCK, (_, open, body, close) => {
    const entries = body.split('\n').filter(Boolean).map(l => {
      const m = l.replace(/,$/, '').match(/^(\t+"[^"]+": )(.*)$/)
      let value = m[2]
      try { value = JSON.stringify(JSON.parse(value).map(v => JSON.stringify(v)).sort()) } catch {}
      return m[1] + value
    })
    return `${open}${entries.sort().join('\n')}\n${close}`
  })
}

const read = (dir, p) => readFileSync(join(dir, p))
// Build times: Nitro's `date` and the app manifest's `timestamp`, in their own files, and each
// asset's `mtime` in Nitro's server assets table (the public asset table's goes in
// canonicalAssets). A timestamp anywhere else is output and compared.
const SERVER_ASSETS = /\/\/ #nitro\/virtual\/server-assets\nvar _assets = \{\n[\s\S]*?\n\};/
const timeNorm = (s, p) => p === 'nitro.json' ? s.replace(/^(\s*"date":\s*)"[^"]*"/m, '$1""')
  : MANIFEST.test(p) ? s.replace(/^(\{"id":"[^"]*","timestamp":)\d+/, '$10')
  : s.replace(SERVER_ASSETS, t => t.replace(/("mtime": )"[^"\n]*"/g, '$1""'))
// Normalized text of a file after `rename` (a hash→hash map, identity when empty).
// Names of Nuxt's intermediate SSR files (`.nuxt/vite/services/ssr/_nuxt/<name>-<hash>.js`) in
// Nitro's region comments (a line that is only `// <path>`) and in source map `sources`. Their
// hashes follow the SSR styles map's order (above), and the code they name is compared where Nitro
// bundled it. Anywhere else (code, `sourcesContent`, JSON) the name is compared as is.
const SSR_INTERMEDIATE = /(\.nuxt\/vite\/services\/ssr\/_nuxt\/[^"\s]*?[-.])[A-Za-z0-9_-]{8}(?=\.m?js$)/
const REGION_COMMENT = /^\/\/ (\S*\.nuxt\/vite\/services\/ssr\/_nuxt\/\S+)$/gm
function maskIntermediate (s, p) {
  if (p.endsWith('.map')) {
    try {
      const m = JSON.parse(s)
      if (Array.isArray(m.sources)) m.sources = m.sources.map(src => typeof src === 'string' ? src.replace(SSR_INTERMEDIATE, '$1#') : src)
      return JSON.stringify(m)
    } catch { return s }
  }
  return s.replace(REGION_COMMENT, (line, path) => `// ${path.replace(SSR_INTERMEDIATE, '$1#')}`)
}
function norm (dir, p, rename) {
  let s = read(dir, p).toString('utf8')
  if (rename.size) s = s.replace(HASH, h => rename.get(h) ?? h)
  if (p.startsWith('server/')) s = maskIntermediate(s, p)
  s = canonicalAssets(timeNorm(s, p))
  if (STYLES_MAP.test(p)) s = canonicalStylesMap(s)
  // The asset table's order moves the mappings of the file that holds it.
  const tableMap = p.endsWith('.map') && (STYLES_MAP.test(p.slice(0, -4)) || (existsSync(join(dir, p.slice(0, -4))) && ASSETS_TABLE.test(readFileSync(join(dir, p.slice(0, -4)), 'utf8'))))
  if (tableMap || ORDER_FREE.test(p.replace(/\.map$/, ''))) {
    if (p.endsWith('.map')) {
      const m = JSON.parse(s)
      return JSON.stringify({ sources: [...m.sources].sort(), names: [...(m.names ?? [])].sort() })
    }
    return s.split(/\r?\n/).map(l => l.replace(/,\s*$/, '').trim()).sort().join('\n')
  }
  return s
}
// Pairing key: normalized text with every hash blanked, so files pair before the rename map exists.
const skeleton = (dir, p) => TEXT.test(p) ? norm(dir, p, new Map()).replace(HASH, '#') : read(dir, p).toString('base64')

const group = (dir) => {
  const g = new Map()
  for (const p of list(dir)) { const k = stem(p); if (!g.has(k)) g.set(k, []); g.get(k).push(p) }
  return g
}
const ga = group(dirA), gb = group(dirB)
const diffs = []
const pairs = []
let files = 0

// 1. Pair files: same path first, then within a stem group by skeleton.
for (const [k, pas] of ga) {
  files += pas.length
  const pbs = [...(gb.get(k) ?? [])]
  const rest = []
  for (const pa of pas) {
    const i = pbs.indexOf(pa)
    if (i >= 0) { pairs.push([pa, pa]); pbs.splice(i, 1) } else rest.push(pa)
  }
  if (rest.length === 1 && pbs.length === 1) { pairs.push([rest[0], pbs.pop()]); continue }
  const skB = new Map(pbs.map(pb => [pb, skeleton(dirB, pb)]))
  for (const pa of rest) {
    const sa = skeleton(dirA, pa)
    const hit = pbs.findIndex(pb => skB.get(pb) === sa)
    if (hit >= 0) pairs.push([pa, pbs.splice(hit, 1)[0]])
    else if (pbs.length) pairs.push([pa, pbs.shift()])
    else diffs.push({ k: pa, why: 'only in A' })
  }
  for (const pb of pbs) diffs.push({ k: pb, why: 'only in B' })
}
for (const [k, pbs] of gb) if (!ga.has(k)) for (const pb of pbs) diffs.push({ k: pb, why: 'only in B' })

// 2. Rename map from paired names; one hash may map to one hash only.
const rename = new Map(), renamedTo = new Map()
for (const [pa, pb] of pairs) {
  const ha = hashesOf(pa), hb = hashesOf(pb)
  for (let i = 0; i < Math.min(ha.length, hb.length); i++) {
    if (ha[i] === hb[i] && !rename.has(ha[i])) continue
    if ((rename.get(ha[i]) ?? hb[i]) !== hb[i] || (renamedTo.get(hb[i]) ?? ha[i]) !== ha[i]) diffs.push({ k: `${pa} ~ ${pb}`, why: `hash ${ha[i]} renamed two ways` })
    rename.set(ha[i], hb[i]); renamedTo.set(hb[i], ha[i])
  }
}

// 3. Compare every pair with the map applied.
// Identical bytes are equal only if they name no renamed hash: an unchanged file that imports a
// renamed chunk by its old name is broken.
const renamed = [...rename].filter(([x, y]) => x !== y).map(([x]) => Buffer.from(x))
let same = 0
for (const [pa, pb] of pairs) {
  const ba = read(dirA, pa), bb = read(dirB, pb)
  if (ba.equals(bb) && pa === pb && (!TEXT.test(pa) || !renamed.some(h => ba.includes(h)))) { same++; continue }
  if (!TEXT.test(pa)) { if (ba.equals(bb)) same++; else diffs.push({ k: `${pa} ~ ${pb}`, why: 'binary differs' }); continue }
  const na = norm(dirA, pa, rename), nb = norm(dirB, pb, new Map())
  if (na === nb) { same++; continue }
  let c = 0
  while (c < na.length && na[c] === nb[c]) c++
  diffs.push({ k: `${pa} ~ ${pb}`, why: `differs at ${c}`, a: na.slice(Math.max(0, c - 60), c + 100), b: nb.slice(Math.max(0, c - 60), c + 100) })
}

console.log(`files ${files} | normalized-equal ${same} | different ${diffs.length} | renamed hashes ${[...rename].filter(([a, b]) => a !== b).length}`)
const shown = only ? diffs.filter(d => only.test(d.k)) : diffs
if (only) console.log(`matching ${only}: ${shown.length}`)
for (const d of shown.slice(0, 50)) {
  console.log(`  ${d.k}: ${d.why}`)
  if (d.a !== undefined && show > 0) console.log(`    A: ${JSON.stringify(d.a)}\n    B: ${JSON.stringify(d.b)}`)
}
process.exitCode = diffs.length ? 1 : 0
