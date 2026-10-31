// What a dependency Rolldown's build cache lists in `build-deps.json` hashes to now, for the
// whole-build skip: the same encodings as `crates/rolldown/src/utils/build_cache.rs`, hashed the
// same way at save and at check (the values only need to agree with each other).
//   `path`                 a file by its content, a directory by its entries
//   `dir\0prefix`          the entries of `dir` named `prefix*`
//   `path\0\0tsconfig`     a tsconfig by its content and that of every file it extends or references
// A directory listing marks directories, and includes where each symlink finally leads and where
// the directory really is, so replacing a file by a directory or retargeting a link (or one
// further along its chain) changes the hash. A tsconfig that can't be read throws: the skip is
// declined rather than trusting a chain it couldn't follow.
import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, readlinkSync, realpathSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'

export const TSCONFIG_DEP = '\0\0tsconfig'

const sha = data => createHash('sha256').update(data).digest('hex')

/** The hash of dependency `dep`, `null` when its path doesn't exist. */
export function depHash (dep) {
  if (dep.endsWith(TSCONFIG_DEP)) {
    const path = dep.slice(0, -TSCONFIG_DEP.length)
    return existsSync(path) ? sha(tsconfigFiles(path).map(f => `${f}\0${existsSync(f) ? sha(readFileSync(f)) : 'missing'}`).join('\0')) : null
  }
  const i = dep.indexOf('\0')
  const [path, prefix] = i < 0 ? [dep, undefined] : [dep.slice(0, i), dep.slice(i + 1)]
  if (!existsSync(path)) return null
  const isDir = statSync(path).isDirectory()
  // Entries of a file: none, as for a missing directory.
  if (prefix !== undefined && !isDir) return null
  return sha(isDir ? listing(path, prefix ?? '') : readFileSync(path))
}

function listing (dir, prefix) {
  const names = readdirSync(dir, { withFileTypes: true }).filter(e => e.name.startsWith(prefix)).map((e) => {
    const path = join(dir, e.name)
    const isDir = e.isDirectory() || (e.isSymbolicLink() && existsSync(path) && statSync(path).isDirectory())
    const name = isDir ? `${e.name}/` : e.name
    if (!e.isSymbolicLink()) return name
    let target
    try { target = realpathSync(path) } catch { target = `!${readlinkSync(path)}` }
    return `${name}\0${target}`
  }).sort()
  return `${realpathSync(dir)}\0\0${names.join('\0')}`
}

/** `tsconfig` and every file its `extends` and `references` reach, depth first, each once. */
export function tsconfigFiles (tsconfig, seen = new Set()) {
  if (seen.has(tsconfig)) return []
  seen.add(tsconfig)
  const files = [tsconfig]
  // Missing: hashed as missing, so creating it is seen.
  if (!existsSync(tsconfig)) return files
  let config
  try {
    config = JSON.parse(stripJsonc(readFileSync(tsconfig, 'utf8')))
  } catch (err) {
    throw new Error(`cannot read ${tsconfig}: ${err.message}`)
  }
  const base = dirname(tsconfig)
  const extended = [config?.extends ?? []].flat().filter(e => typeof e === 'string')
  for (const spec of extended) {
    const file = resolveExtends(spec, tsconfig, base)
    if (!file) throw new Error(`cannot resolve "extends": "${spec}" in ${tsconfig}`)
    files.push(...tsconfigFiles(file, seen))
  }
  for (const ref of Array.isArray(config?.references) ? config.references : []) {
    if (typeof ref?.path !== 'string') continue
    const p = resolve(base, ref.path)
    const file = p.endsWith('.json') ? p : join(p, 'tsconfig.json')
    files.push(...tsconfigFiles(file, seen))
  }
  return files
}

function resolveExtends (spec, from, base) {
  if (spec.startsWith('.') || spec.startsWith('/')) {
    const p = resolve(base, spec)
    return existsSync(p) && !statSync(p).isDirectory() ? p : p.endsWith('.json') ? p : `${p}.json`
  }
  // A package: covered by the lockfile, but still hashed (its own `extends` may be relative).
  const req = createRequire(from)
  for (const candidate of [spec, `${spec}.json`, `${spec}/tsconfig.json`]) {
    try { return req.resolve(candidate) } catch {}
  }
  return null
}

/** JSON with comments and trailing commas, as tsconfig files allow, to plain JSON. */
export function stripJsonc (text) {
  return dropTrailingCommas(dropComments(text))
}

// Copies a string literal starting at `i` to `out`; returns the index after it.
function copyString (text, i, out) {
  let j = i + 1
  while (j < text.length && text[j] !== '"') j += text[j] === '\\' ? 2 : 1
  out.push(text.slice(i, j + 1))
  return j + 1
}

function dropComments (text) {
  const out = []
  let i = 0
  while (i < text.length) {
    if (text[i] === '"') {
      i = copyString(text, i, out)
    } else if (text.startsWith('//', i)) {
      const end = text.indexOf('\n', i)
      i = end < 0 ? text.length : end
    } else if (text.startsWith('/*', i)) {
      const end = text.indexOf('*/', i + 2)
      if (end < 0) throw new Error('unterminated comment')
      out.push(' ')
      i = end + 2
    } else {
      out.push(text[i++])
    }
  }
  return out.join('')
}

function dropTrailingCommas (text) {
  const out = []
  let i = 0
  while (i < text.length) {
    if (text[i] === '"') {
      i = copyString(text, i, out)
      continue
    }
    if (text[i] === ',') {
      let j = i + 1
      while (j < text.length && /\s/.test(text[j])) j++
      if (text[j] === '}' || text[j] === ']') {
        i++
        continue
      }
    }
    out.push(text[i++])
  }
  return out.join('')
}
