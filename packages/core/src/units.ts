import { existsSync, realpathSync } from 'node:fs'
import { dirname, isAbsolute, join, resolve } from 'node:path'

// A part of an app that changes on its own: a layer, a workspace package, a framework module, a
// plain folder. `roots` are directories (absolute, or relative to the app root) or package names
// (`vue`, `@nuxt/ui`), found in the `node_modules` folders above the app root. A module belongs to
// the unit with the longest root that contains it, unless a `node_modules` lies between (a
// dependency installed inside a root is not part of the root's unit).
export interface Unit {
  name: string
  roots: string[]
  kind?: string
}

export interface UnitIndex {
  // The units with their roots as real absolute paths.
  units: Unit[]
  of: (id: string) => Unit | undefined
}

// Ids and roots are compared with `/` separators (Vite ids use `/` on Windows too).
export const slash = (p: string) => p.replaceAll('\\', '/')
const withSlash = (dir: string) => dir.endsWith('/') ? dir : dir + '/'
export const real = (p: string) => { try { return realpathSync(p) } catch { return p } }
const isPackageName = (root: string) => !isAbsolute(root) && !/^\.\.?([\\/]|$)/.test(root) && /^(@[\w.-]+\/)?[\w.-]+$/.test(root)

function packageRoot (name: string, from: string): string | undefined {
  for (let d = from; ; d = dirname(d)) {
    const dir = join(d, 'node_modules', name)
    if (existsSync(join(dir, 'package.json'))) return dir
    if (d === dirname(d)) return undefined
  }
}

export function indexUnits (given: Unit[], appRoot = process.cwd()): UnitIndex {
  // Each root as an absolute path: a folder relative to the app root when it exists (`src`), else
  // a package name (`vue`).
  const absolute = given.map(u => u.roots.map(r => {
    const dir = isPackageName(r) && !existsSync(resolve(appRoot, r)) ? packageRoot(r, appRoot) : resolve(appRoot, r)
    if (!dir) throw new Error(`unitcache: unit "${u.name}": no folder or package "${r}" from ${appRoot}`)
    return dir
  }))
  const units = given.map((u, i) => ({ ...u, roots: absolute[i].map(real) }))
  const names = new Set<string>()
  for (const u of units) {
    if (names.has(u.name)) throw new Error(`unitcache: two units named "${u.name}"`)
    names.add(u.name)
  }
  // Rolldown ids are real paths; a root given through a symlink (a linked workspace package) is
  // indexed under its real path, and under the path it was given as for ids with
  // `preserveSymlinks`.
  const roots = units.flatMap((u, i) => [...new Set([...u.roots, ...absolute[i]].map(r => withSlash(slash(r))))].map(root => ({ root, unit: u })))
    .sort((a, b) => b.root.length - a.root.length)
  const cache = new Map<string, Unit | undefined>()
  return {
    units,
    of (id) {
      if (id.startsWith('\0')) return undefined
      const file = slash(id.replace(/[?#].*$/, ''))
      if (cache.has(file)) return cache.get(file)
      const hit = roots.find(r => file.startsWith(r.root) && !file.slice(r.root.length).split('/').includes('node_modules'))
      cache.set(file, hit?.unit)
      return hit?.unit
    },
  }
}
