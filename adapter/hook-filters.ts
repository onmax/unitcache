// Adds Rolldown hook filters to known plugins whose hooks start by testing the code and return
// when it doesn't match. Rolldown evaluates a filter in Rust, so the chunks it rejects never cost a
// Rust→JS call. Each entry is equivalent to the plugin's own early return, so output is unchanged;
// upstream, each plugin would declare the filter itself. Env switch: EXP_HOOK_FILTERS=0 turns it off.
import type { Plugin } from 'vite'

const RENDER_CHUNK_CODE_FILTERS: Record<string, RegExp> = {
  // `if (code.includes("virtual:fullstack/assets-manifest"))` (nitro, fullstack:assets)
  'fullstack:assets': /virtual:fullstack\/assets-manifest/,
  // `if (!isInlineStyleId(chunk.facadeModuleId) || !CSS_URL_SINGLE_RE.test(code)) return` (Nuxt)
  'nuxt:vite-public-dir-resolution': /url\(\/[^)]+\)/,
}

// Hooks that do nothing in some environments. Removing them saves a Rust→JS call per module.
const NOOP_HOOKS: Record<string, string[]> = {
  // `async moduleParsed(info) { if (environment.name !== "ssr") return; ...` (Nuxt ssr-styles)
  'nuxt:ssr-styles:client': ['moduleParsed'],
}

// The same for a server environment (`consumer: 'server'`: Nuxt's SSR and Nitro builds), where
// Vite's `getInsertPreload(environment)` is false.
const SERVER_NOOP_HOOKS: Record<string, string[]> = {
  // `augmentChunkHash(chunk) { if (!getInsertPreload(environment)) return; ...`
  'vite:build-import-analysis': ['augmentChunkHash'],
}
const SERVER_RENDER_CHUNK_CODE_FILTERS: Record<string, RegExp> = {
  // The preload graph is only recorded when `getInsertPreload`; what is left is
  // `if (code.includes("__VITE_IS_MODERN__")) { ... }`.
  'vite:build-import-analysis': /__VITE_IS_MODERN__/,
}

export function hookFiltersPlugin (): Plugin | undefined {
  if (process.env.EXP_HOOK_FILTERS === '0') return
  return {
    name: 'exp:hook-filters',
    // Rolldown's `options` hook sees each environment's final plugin list, before bindingify.
    options (options) {
      const server = (this as any)?.environment?.config?.consumer === 'server'
      for (const p of (options.plugins ?? []).flat(Infinity) as any[]) {
        for (const hook of (p && NOOP_HOOKS[p.name]) ?? []) delete p[hook]
        if (server) for (const hook of (p && SERVER_NOOP_HOOKS[p.name]) ?? []) delete p[hook]
        // Measurement only, output is wrong: what a build costs with no per-chunk JS hook at all,
        // the most chunk reuse could save.
        if (p && process.env.EXP_RD_CEILING_NO_CHUNK_HOOKS === '1') { delete p.renderChunk; delete p.augmentChunkHash }
        const re = p && (RENDER_CHUNK_CODE_FILTERS[p.name] ?? (server ? SERVER_RENDER_CHUNK_CODE_FILTERS[p.name] : undefined))
        if (!re || !p.renderChunk) continue
        const hook = p.renderChunk
        if (typeof hook === 'function') p.renderChunk = { filter: { code: re }, handler: hook }
        else if (!hook.filter) p.renderChunk = { ...hook, filter: { code: re } }
      }
    },
  }
}
