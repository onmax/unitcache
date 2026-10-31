// Wraps a playground's Nuxt config with the lab switches, so each app changes one line:
// `export default defineNuxtConfig(lab({ ...the app's own config }))`. Env switches:
//   EXP_BUILD_ID=<id>       a fixed buildId, so two builds of the same tree can be compared byte for byte
//   EXP_BUILD_CACHE=1       Nuxt's own `experimental.buildCache` (the "today" baseline; Nuxt reads it
//                           before any module runs, so it has to be set here and not in a module)
//   EXP_RD_CACHE=<dir>      Rolldown's build cache through adapter/snapshot.ts (needs the forked Rolldown)
//   EXP_HOOK_FILTERS=0      leave out adapter/hook-filters.ts
import { hookFiltersPlugin } from '../adapter/hook-filters.ts'
import { snapshot } from '../adapter/snapshot.ts'

export function lab<T extends Record<string, any>> (config: T): T {
  const rd = snapshot()
  return {
    ...config,
    modules: [...(config.modules ?? []), ...(rd.enabled ? [rd.module] : [])],
    ...(process.env.EXP_BUILD_ID ? { buildId: process.env.EXP_BUILD_ID } : {}),
    devtools: { enabled: false },
    telemetry: false,
    experimental: { ...config.experimental, ...(process.env.EXP_BUILD_CACHE ? { buildCache: true } : {}) },
    vite: {
      ...config.vite,
      plugins: [...(config.vite?.plugins ?? []), ...(rd.enabled ? [rd.vitePlugin] : []), ...[hookFiltersPlugin()].filter(Boolean)],
    },
  }
}
