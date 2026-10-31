import vue from '@vitejs/plugin-vue'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { unitcache } from 'unitcache'
import { defineConfig } from 'vite'
import { units } from './units.ts'

const root = fileURLToPath(new URL('.', import.meta.url))
// EXP_UNIT_GROUPS=1: unitcache (packages/core) groups each unit's modules in chunks of their own,
// split by entry.
const unitGroups = process.env.EXP_UNIT_GROUPS === '1'

// EXP_RD_CACHE=<dir>: Rolldown buildCache, keyed on the lockfile and this config.
// Until the core library exists there is no registry diff for the unplugins, so a change that adds
// or removes a component or composable file needs a new key.
const cacheDir = process.env.EXP_RD_CACHE
const cacheKey = cacheDir && createHash('sha256').update(readFileSync(root + '../../pnpm-lock.yaml')).update(readFileSync(root + 'vite.config.ts')).update(readFileSync(root + '../../node_modules/.modules.yaml')).update(process.env.EXP_UNIT_GROUPS ?? '').digest('hex').slice(0, 16)

export default defineConfig({
  resolve: {
    alias: units.filter(u => !u.package).map(u => ({ find: '@units/' + u.name, replacement: root + u.dir })),
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: units.flatMap(u => [u.dir + '/composables', u.dir + '/utils']),
      dts: false,
    }),
    Components({
      dirs: units.map(u => u.dir + '/components'),
      dts: false,
    }),
    ...(unitGroups ? [unitcache({ units: units.map(u => ({ name: u.name, roots: [root + u.dir] })) })] : []),
  ],
  build: {
    sourcemap: false,
    rolldownOptions: {
      ...(cacheDir ? { experimental: { buildCache: { dir: cacheDir + '/client', key: cacheKey } } } : {}),
    },
  },
})
