// The input files of a Nuxt app for the adapter's two fingerprints (generated types, environment
// skip), compared without reading every file on each build. A record keeps a digest per file;
// a build compares the files it finds with the record by path and size first, then reads files,
// newest first, until one differs. A changed build reads few files; an unchanged one reads all.
// Digests for the next record are read off the build's critical path (`digest-worker.mjs`).
import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, readlinkSync, realpathSync, statSync } from 'node:fs'
import { join } from 'node:path'

export const SKIP_DIRS = new Set(['node_modules', '.nuxt', '.output', '.git', '.exp-parallel'])
// Build output and caches under an app root; every other directory, hidden or not, is an input.
const NOT_INPUT_DIRS = new Set([...SKIP_DIRS, '.cache', '.data', '.turbo', 'dist'])

export const digestOf = path => createHash('sha256').update(readFileSync(path)).digest('hex')

// Every file under a root (not only sources: styles, locales, public assets, server files and
// hidden files such as `.env` count too). Symlinks are followed, each real directory once; `links`
// gets every symlink with its target, so pointing a link at another directory that is already
// listed still changes a fingerprint.
function* allFiles (dir, links, seen = new Set()) {
  if (!existsSync(dir)) return
  const real = realpathSync(dir)
  if (seen.has(real)) return
  seen.add(real)
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isSymbolicLink()) links.push(`${p}\0${existsSync(p) ? realpathSync(p) : readlinkSync(p)}`)
    const kind = e.isSymbolicLink() ? (existsSync(p) ? (statSync(p).isDirectory() ? 'dir' : 'file') : 'broken') : e.isDirectory() ? 'dir' : e.isFile() ? 'file' : 'other'
    if (kind === 'dir') { if (!NOT_INPUT_DIRS.has(e.name)) yield* allFiles(p, links, seen) }
    else if (kind === 'file') yield p
  }
}

/**
 * The files under `roots` with their stats. `stat` covers size, mtime, ctime and inode in
 * nanoseconds: two scans with the same stats saw files nobody wrote in between (a rewrite moves
 * ctime even when it restores mtime).
 */
export function scan (roots) {
  const files = []
  const links = []
  for (const root of new Set(roots)) {
    for (const path of allFiles(root, links)) {
      const st = statSync(path, { bigint: true })
      files.push({ path, size: Number(st.size), mtimeNs: st.mtimeNs, stat: `${st.size}:${st.mtimeNs}:${st.ctimeNs}:${st.ino}` })
    }
  }
  return { files, links }
}

export function sameScan (a, b) {
  if (a.links.join('\0') !== b.links.join('\0') || a.files.length !== b.files.length) return false
  return a.files.every((f, i) => f.path === b.files[i].path && f.stat === b.files[i].stat)
}

/**
 * `record` (from `makeRecord`) describes the files of `current` and `extra`. With `include`, only
 * those files are compared by content; the others by path.
 */
export function recordMatches (record, current, extra, include = () => true) {
  if (!record || record.extra !== extra || record.links.join('\0') !== current.links.join('\0')) return false
  if (record.files.length !== current.files.length) return false
  const content = []
  for (let i = 0; i < current.files.length; i++) {
    const f = current.files[i]
    const [path, size, digest] = record.files[i]
    if (path !== f.path) return false
    if (!include(f.path)) continue
    if (size !== f.size || digest == null) return false
    content.push([f, digest])
  }
  // The file edited last is the likeliest to differ.
  content.sort((a, b) => (a[0].mtimeNs < b[0].mtimeNs ? 1 : a[0].mtimeNs > b[0].mtimeNs ? -1 : 0))
  return content.every(([f, digest]) => digestOf(f.path) === digest)
}

/** `digests` holds a digest for each file of `current`, in order. */
export function makeRecord (current, extra, digests, include = () => true) {
  return {
    extra,
    links: current.links,
    files: current.files.map((f, i) => include(f.path) ? [f.path, f.size, digests[i]] : [f.path, null, null]),
  }
}
