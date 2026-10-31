// Output attribution per group, for the modules-vs-layers question. Env switch:
//   EXP_ATTRIBUTION=<dir>  write <dir>/<env>.json: per group, modules and rendered bytes
// Groups: `pkg:<name>` (node_modules, which holds Nuxt modules' runtime code and libraries),
// `layer:<name>` (a folder under a `layers/` dir), `generated` (virtual ids, `.nuxt`, `#build`),
// `app` (everything else).
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Plugin } from 'vite'

export function groupOf (id: string): string {
  const clean = id.replace(/\?.*$/, '')
  if (clean.startsWith('\0') || clean.startsWith('virtual:') || clean.includes('/.nuxt/') || clean.startsWith('#')) return 'generated'
  const nm = clean.lastIndexOf('/node_modules/')
  if (nm >= 0) {
    const rest = clean.slice(nm + '/node_modules/'.length).split('/')
    return `pkg:${rest[0].startsWith('@') ? `${rest[0]}/${rest[1]}` : rest[0]}`
  }
  const layer = clean.match(/\/layers\/([^/]+)\//)
  if (layer) return `layer:${layer[1]}`
  return 'app'
}

export function attributionPlugin (): Plugin | undefined {
  const dir = process.env.EXP_ATTRIBUTION
  if (!dir) return
  return {
    name: 'exp:attribution',
    enforce: 'post',
    generateBundle (_options, bundle) {
      const groups: Record<string, { modules: number, bytes: number, chunks: Set<string> }> = {}
      let assetBytes = 0
      for (const out of Object.values(bundle)) {
        if (out.type === 'asset') { assetBytes += typeof out.source === 'string' ? Buffer.byteLength(out.source) : out.source.length; continue }
        for (const [id, m] of Object.entries(out.modules)) {
          const g = (groups[groupOf(id)] ??= { modules: 0, bytes: 0, chunks: new Set() })
          g.modules++
          g.bytes += m.renderedLength
          g.chunks.add(out.fileName)
        }
      }
      mkdirSync(dir, { recursive: true })
      const rows = Object.fromEntries(Object.entries(groups).sort((x, y) => y[1].bytes - x[1].bytes).map(([k, v]) => [k, { modules: v.modules, bytes: v.bytes, chunks: v.chunks.size }]))
      writeFileSync(join(dir, `${this.environment.name}.json`), JSON.stringify({ assetBytes, groups: rows }, null, 2))
    },
  }
}
