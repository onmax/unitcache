// Nuxt config shared by the generated layer apps (big3, layers26). Env switches:
//   EXP_BUILD_ID=<id>       a fixed buildId, so two builds of the same tree can be compared byte for byte
//   EXP_BUILD_CACHE=1       Nuxt's own `experimental.buildCache` (the "today" baseline)
//   EXP_RD_CACHE=<dir>      Rolldown's build cache through adapter/snapshot.ts (needs the forked Rolldown)
//   EXP_HOOK_FILTERS=0      leave out adapter/hook-filters.ts
//   EXP_UNITS=1             @unitcache/nuxt: each layer and module package in chunks of its own
//   EXP_ATTRIBUTION=<dir>   write output size per layer and package (adapter/attribution.ts)
import { attributionPlugin } from '../../adapter/attribution'
import { hookFiltersPlugin } from '../../adapter/hook-filters'
import { snapshot } from '../../adapter/snapshot'
import unitcacheModule from '../../packages/nuxt/src/module'
import type { Plugin } from 'vite'

export function labConfig () {
  const rd = snapshot()
  return {
    modules: [
      ...(rd.enabled ? [rd.module] : []),
      ...(process.env.EXP_UNITS === '1' ? [[unitcacheModule, { group: true, reportDir: process.env.EXP_RD_CACHE && `${process.env.EXP_RD_CACHE}/units` }]] : []),
    ],
    ...(process.env.EXP_BUILD_ID ? { buildId: process.env.EXP_BUILD_ID } : {}),
    buildDir: '.nuxt',
    compatibilityDate: '2026-10-01',
    devtools: { enabled: false },
    telemetry: false,
    experimental: { asyncContext: true, ...(process.env.EXP_BUILD_CACHE ? { buildCache: true } : {}) },
    vite: {
      plugins: [
        ...(rd.enabled ? [rd.vitePlugin] : []),
        ...[hookFiltersPlugin(), attributionPlugin()].filter(Boolean) as Plugin[],
      ],
      // A value read from an env var that no key prefix covers: the adapter's resolved-config hash
      // has to see it (`DEPLOY_FLAVOR=x` changes output, and the check covers it).
      define: { __DEPLOY_FLAVOR__: JSON.stringify(process.env.DEPLOY_FLAVOR ?? 'default') },
    },
  }
}
