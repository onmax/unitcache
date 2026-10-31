import { createRequire } from 'node:module'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

// What the Rolldown that Vite runs on can do, read from the marker the patched Rolldown exports
// (`experimentalCapabilities` in `rolldown/experimental`), not from its version: the same check
// keeps working once the patches land upstream. No marker: grouping only.
export interface Capabilities {
  // `experimental.buildCache` with dependency tracking, `invalidate` and kept `meta`.
  buildCache?: number
  // Reuse of rendered chunks across builds (no Rolldown build has it yet).
  chunkReuse?: number
}

// Rolldown resolved from the Vite the app at `root` uses, so an app that depends on another
// `rolldown` copy still gets the answer for the one that builds it.
export async function detectCapabilities (root: string): Promise<Capabilities> {
  try {
    const vite = createRequire(join(root, 'package.json')).resolve('vite/package.json')
    const experimental = createRequire(vite).resolve('rolldown/experimental')
    const mod = await import(pathToFileURL(experimental).href)
    return { ...(mod.experimentalCapabilities ?? {}) }
  } catch {
    return {}
  }
}
