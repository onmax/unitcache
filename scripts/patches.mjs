#!/usr/bin/env node
// node scripts/patches.mjs apply|revert|status
// pnpm applies patches/*.patch at install (pnpm-workspace.yaml, patchedDependencies). The bench's
// "today" baseline needs the stock packages, so this script swaps each patched file in
// node_modules between its stock and patched content, and prints a stamp of what is installed.
// pnpm hard-links installed files to its store, which other projects share: files are never
// written in place, a new file is renamed over the old one.
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const S = join(import.meta.dirname, '..')
const store = join(S, 'node_modules/.pnpm')
const keep = join(S, 'cache/patches')
const sha = s => createHash('sha256').update(s).digest('hex')

const specs = [...readFileSync(join(S, 'pnpm-workspace.yaml'), 'utf8').split('patchedDependencies:')[1].matchAll(/^\s+'?(.+?)'?: (patches\/\S+)$/gm)]
  .map(([, spec, file]) => ({ spec, patch: readFileSync(join(S, file), 'utf8') }))

function replaceFile (file, content) {
  if (readFileSync(file, 'utf8') === content) return
  const tmp = `${file}.tmp-${process.pid}`
  writeFileSync(tmp, content)
  renameSync(tmp, file)
}

// Runs GNU patch on a copy and returns the result, or null when the hunks don't apply.
function patched (content, section, reverse) {
  const dir = join(keep, `.work-${process.pid}`)
  mkdirSync(dir, { recursive: true })
  try {
    writeFileSync(join(dir, 'in'), content)
    execFileSync('patch', ['-s', '-f', ...(reverse ? ['-R'] : []), '-o', join(dir, 'out'), join(dir, 'in')], { input: section, stdio: ['pipe', 'ignore', 'ignore'] })
    return readFileSync(join(dir, 'out'), 'utf8')
  } catch {
    return null
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

const cmd = process.argv[2]
const stamp = createHash('sha256')
for (const { spec, patch } of specs) {
  const at = spec.lastIndexOf('@')
  const name = spec.slice(0, at), version = spec.slice(at + 1)
  const prefix = `${name.replace('/', '+')}@${version}`
  const dirs = readdirSync(store).filter(d => d === prefix || d.startsWith(`${prefix}_`)).map(d => join(store, d, 'node_modules', name)).filter(existsSync)
  if (!dirs.length) throw new Error(`${spec} is not installed (run pnpm install)`)
  for (const section of patch.split(/^(?=diff --git )/m).filter(Boolean)) {
    const file = section.match(/^diff --git a\/(\S+)/)[1]
    for (const dir of dirs) {
      const path = join(dir, file)
      // Both versions are kept the first time a file is seen, from whichever one is installed.
      const saved = join(keep, sha(path).slice(0, 16))
      if (!existsSync(`${saved}.stock`)) {
        const now = readFileSync(path, 'utf8')
        const stock = patched(now, section, true)
        const versions = stock != null ? { stock, patched: now } : { stock: now, patched: patched(now, section, false) }
        if (versions.patched == null) throw new Error(`${spec}: patches/${spec.replace('/', '__')}.patch applies to neither version of ${path}`)
        mkdirSync(dirname(saved), { recursive: true })
        writeFileSync(`${saved}.stock`, versions.stock)
        writeFileSync(`${saved}.patched`, versions.patched)
      }
      if (cmd === 'apply' || cmd === 'revert') replaceFile(path, readFileSync(`${saved}.${cmd === 'apply' ? 'patched' : 'stock'}`, 'utf8'))
      const now = readFileSync(path, 'utf8')
      if (cmd === 'status') console.log(`${now === readFileSync(`${saved}.patched`, 'utf8') ? 'patched' : 'stock  '} ${spec} ${file}`)
      stamp.update(path).update(now)
    }
  }
}
console.log(`stamp ${stamp.digest('hex').slice(0, 12)}`)
