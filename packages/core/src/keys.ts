import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, readlinkSync, statSync } from 'node:fs'
import { join, sep } from 'node:path'
import { real, type Unit } from './units.ts'

// Directories under a root that are output or caches, not inputs.
const NOT_INPUT_DIRS = new Set(['node_modules', '.git', '.nuxt', '.output', '.cache', '.data', '.turbo', 'dist'])

// Each unit's key: an installed package (its real path is inside a `node_modules`) by name and
// version, since the lockfile covers its files; anything else, linked workspace packages included,
// by the paths and contents of every file under its roots, without the roots of other units nested
// inside and without `exclude` (report and cache dirs, custom output dirs). Equal keys, same unit.
// `units` come from `indexUnits` (real absolute roots).
export function unitKeys (units: Unit[], exclude: string[] = []): Record<string, string> {
  const all = units.flatMap(u => u.roots)
  const excluded = exclude.map(real)
  return Object.fromEntries(units.map(u => [u.name, unitKey(u, new Set([...all.filter(r => !u.roots.includes(r)), ...excluded]))]))
}

function unitKey (unit: Unit, skip: Set<string>): string {
  const h = createHash('sha256')
  for (const root of [...unit.roots].sort()) {
    const pkg = join(root, 'package.json')
    if (root.split(sep).includes('node_modules') && existsSync(pkg)) {
      const { name, version } = JSON.parse(readFileSync(pkg, 'utf8'))
      h.update(`\0pkg\0${name}@${version}`)
      continue
    }
    for (const file of files(root, skip)) h.update(`\0${file}\0`).update(file.includes('\0') ? '' : readFileSync(file))
  }
  return h.digest('hex').slice(0, 16)
}

// Files under `dir`, by path; a symlink also lists `<link>\0<target>`, so retargeting a link
// changes the key even when its new target was already listed. Directories are compared by real
// path, each visited once.
function files (dir: string, skip: Set<string>, seen = new Set<string>()): string[] {
  if (!existsSync(dir)) return []
  const realDir = real(dir)
  if (skip.has(realDir) || seen.has(realDir)) return []
  seen.add(realDir)
  const out: string[] = []
  for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name < b.name ? -1 : 1)) {
    const p = join(dir, e.name)
    if (e.isSymbolicLink()) {
      out.push(`${p}\0${readlinkSync(p)}`)
      if (!existsSync(p)) continue
    }
    if (statSync(p).isDirectory()) { if (!NOT_INPUT_DIRS.has(e.name)) out.push(...files(p, skip, seen)) }
    else out.push(p)
  }
  return out
}

// Units whose key differs from the previous build's (`previous` missing: all of them).
export function changedUnits (keys: Record<string, string>, previous?: Record<string, string>): string[] {
  return Object.keys(keys).filter(name => previous?.[name] !== keys[name])
}
