#!/usr/bin/env node
// Which Rolldown every package in the workspace gets (pnpm-workspace.yaml overrides it to
// vendor/rolldown).
//   node scripts/use-rolldown.mjs <fork>/packages/rolldown   remember a build of the fork and use it
//   node scripts/use-rolldown.mjs fork                       use the remembered fork build
//   node scripts/use-rolldown.mjs stock                      use the published rolldown 1.2.16
import { existsSync, readlinkSync, symlinkSync, unlinkSync } from 'node:fs'
import { join, resolve } from 'node:path'

const vendor = join(import.meta.dirname, '../vendor')
const relink = (name, target) => {
  const link = join(vendor, name)
  if (existsSync(link) || readlinkOrNull(link)) unlinkSync(link)
  symlinkSync(target, link)
}
const readlinkOrNull = (p) => { try { return readlinkSync(p) } catch { return null } }

let which = process.argv[2]
if (!which) throw new Error('usage: use-rolldown.mjs <fork>/packages/rolldown | fork | stock')
if (which !== 'fork' && which !== 'stock') {
  const dir = resolve(which)
  if (!existsSync(join(dir, 'dist/index.mjs'))) throw new Error(`${dir} has no dist/index.mjs: build the fork first (see README.md)`)
  relink('rolldown-fork', dir)
  which = 'fork'
}
if (which === 'fork' && !existsSync(join(vendor, 'rolldown-fork/dist/index.mjs'))) throw new Error('no fork build remembered: pass its packages/rolldown path once')
relink('rolldown', which === 'fork' ? 'rolldown-fork' : 'rolldown-stock/node_modules/rolldown')
console.log(`rolldown -> ${readlinkSync(join(vendor, 'rolldown'))}`)
