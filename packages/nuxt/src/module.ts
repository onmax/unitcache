// Nuxt adapter for unitcache: every layer and every installed module package is a unit.
// Usage in nuxt.config: `modules: ['@unitcache/nuxt']`, options under `unitcache`.
import { existsSync, realpathSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { basename, dirname, isAbsolute, join, sep } from 'node:path'
import { type Unit, unitcache } from 'unitcache'

export interface ModuleOptions {
  // Unit chunks. Default false: on its own, grouping deepens the chunk import graph, so one edit
  // renames more files through Rolldown's hash cascade (big3: 45.6% of client files instead of
  // 0.6%, gzip +16%). It pays once chunk hashes are isolated, which this repository doesn't do yet.
  group?: boolean
  // Installed module packages as units of their own (their runtime files). Default true.
  modules?: boolean
  // Keep unit keys here and log which units changed since the last build. Default: off.
  reportDir?: string
}

// The app is `app`, other layers `layer:<name>` (the layer's `$meta.name`, else its folder), and
// module packages `module:<package name>`. A module that lives inside a layer (`<layer>/modules`)
// stays in that layer.
export function nuxtUnits (nuxt: any, options: ModuleOptions = {}): Unit[] {
  const o = nuxt.options
  const units: Unit[] = []
  const taken = new Set<string>()
  const add = (name: string, roots: string[], kind: string) => {
    let n = name
    for (let i = 2; taken.has(n); i++) n = `${name}~${i}`
    taken.add(n)
    units.push({ name: n, roots, kind })
  }
  for (const layer of o._layers) {
    const root = real(layer.config?.rootDir ?? layer.cwd)
    add(root === real(o.rootDir) ? 'app' : `layer:${layer.meta?.name ?? layer.config?.$meta?.name ?? basename(root)}`, [root], 'layer')
  }
  if (options.modules !== false) {
    const layerRoots = units.map(u => u.roots[0].endsWith(sep) ? u.roots[0] : u.roots[0] + sep)
    const inLayer = (p: string) => layerRoots.some(r => p.startsWith(r) && !p.slice(r.length).split(sep).includes('node_modules'))
    const require = createRequire(join(o.rootDir, 'package.json'))
    for (const m of o._installedModules ?? []) {
      if (!m.entryPath) continue
      const named = isAbsolute(m.entryPath) ? undefined : packageByName(m.entryPath, [...(o.modulesDir ?? []), join(o.rootDir, 'node_modules')])
      const file = named ?? entryFile(m.entryPath, require, o.modulesDir ?? [])
      if (!file || inLayer(file)) continue
      const dir = named ?? packageDir(file)
      // A package dir that holds a layer (a local module file under a workspace root) is not the
      // module's own package.
      if (!dir || dir === real(o.rootDir) || layerRoots.some(r => r.startsWith(dir + sep)) || units.some(u => u.roots[0] === dir)) continue
      add(`module:${m.meta?.name ?? basename(dir)}`, [dir], 'module')
    }
  }
  return units
}

// An installed package's dir from a module name (`@nuxt/ui`, `nuxt-open-fetch/module`), found in
// the module dirs: packages that only export an `import` condition can't be `require.resolve`d.
function packageByName (entry: string, dirs: string[]): string | undefined {
  if (/^[.~]/.test(entry)) return
  const name = entry.match(/^(@[^/]+\/[^/]+|[^/@][^/]*)/)?.[1]
  if (!name) return
  for (const d of dirs) {
    const dir = join(d, name)
    if (existsSync(join(dir, 'package.json'))) return realpathSync(dir)
  }
}

function entryFile (entry: string, require: NodeJS.Require, modulesDir: string[]): string | undefined {
  if (isAbsolute(entry)) return entry
  for (const paths of [undefined, modulesDir]) {
    try { return require.resolve(entry, paths ? { paths } : undefined) } catch {}
  }
}

function packageDir (file: string): string | undefined {
  for (let d = existsSync(file) && statSync(file).isDirectory() ? file : dirname(file); d !== dirname(d); d = dirname(d)) {
    if (existsSync(join(d, 'package.json'))) return real(d)
  }
}

const real = (p: string) => { try { return realpathSync(p) } catch { return p } }

// Modules that list every unit: templates (`#components`, `#imports`, routes, app config; in the
// build dir or as `virtual:nuxt:` ids). Global CSS needs nothing here: unitcache keeps every
// style out of unit chunks.
export function nuxtAggregate (nuxt: any): (id: string) => boolean {
  const slash = (p: string) => p.replaceAll('\\', '/')
  const buildDir = slash(nuxt.options.buildDir).replace(/\/?$/, '/')
  return (id) => {
    const plain = slash(id.replace(/^\0/, ''))
    return /^\/?virtual:nuxt:/.test(plain) || plain.startsWith(buildDir)
  }
}

export default function unitcacheModule (inline: ModuleOptions, nuxt: any) {
  if (nuxt.options.dev) return
  const options: ModuleOptions = { ...nuxt.options.unitcache, ...inline }
  let units: Unit[] | undefined
  nuxt.hook('modules:done', () => { units = nuxtUnits(nuxt, options) })
  nuxt.options.vite.plugins ||= []
  nuxt.options.vite.plugins.push(unitcache({
    units: () => units ?? nuxtUnits(nuxt, options),
    group: options.group === true,
    // Nitro bundles the SSR output again; grouping it would group by the build dir only.
    environments: ['client', 'ssr'],
    aggregate: nuxtAggregate(nuxt),
    ...(options.reportDir
      ? {
          report: {
            dir: options.reportDir,
            onChanged: (changed, all) => {
              const of = (kind: string) => `${changed.filter(n => all.find(u => u.name === n)?.kind === kind).length}/${all.filter(u => u.kind === kind).length}`
              console.info(`[unitcache] changed units: ${changed.join(', ') || 'none'} (layers ${of('layer')}, modules ${of('module')})`)
            },
          },
        }
      : {}),
  }))
}
unitcacheModule.meta = { name: '@unitcache/nuxt', configKey: 'unitcache' }
