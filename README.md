# unitcache

Incremental production builds for Nuxt apps made of layers and modules. A build keeps a snapshot of its work on disk. The next build, in a new process such as a CI job, redoes only the modules whose inputs changed, and skips the client and SSR builds when nothing they read changed. The output matches a clean build. A check builds 45 cases both ways and compares the results file by file.

It runs on a fork of [Rolldown](https://github.com/rolldown/rolldown) ([`onmax/rolldown`, branch `feat/layer-snapshot-v3`](https://github.com/onmax/rolldown/tree/feat/layer-snapshot-v3)) that builds on [rolldown#10159](https://github.com/rolldown/rolldown/pull/10159) (`experimental.buildCache`, by Christian Vuerings), plus small patches to Vite, plugin-vue, Nuxt and Nitro. Every patch is listed [below](#patches-by-project), one row each, so maintainers can read their own rows as separate issues.

This is research code. Nothing here is published to npm, and the Rolldown fork has to be built from source. Coding agents wrote the code and these docs, and four of my skills cleaned them up: [`unslop`](https://github.com/onmax/skills/tree/main/skills/unslop) and [`emil-unslop-writing`](https://github.com/onmax/skills/tree/main/skills/emil-unslop-writing) for the prose, [`emil-unslop-code`](https://github.com/onmax/skills/tree/main/skills/emil-unslop-code) for the code, and [`emil-unslop-design`](https://github.com/onmax/skills/tree/main/skills/emil-unslop-design), which had nothing to check because there is no UI.

## Results

Median of 5 interleaved rounds (min–max), each build in a new process. "Today" is stock Nuxt 5 nightly with Nuxt's own `experimental.buildCache` and a warm cache. "Ours" is this repository: the fork, the patches and the adapter, starting from a copy of the snapshot the previous build left. The one-layer change edits a component in one layer, with text that no cache has seen.

| app | today, one-layer change | ours | × | today, no change | ours | × |
|---|---|---|---|---|---|---|
| big3: 12 layers, 2,860 components | 30.9 s (30.7–31.4) | 8.3 s (8.3–8.7) | 3.7 | 21.5 s (21.4–22.1) | 2.1 s (2.1–2.2) | 10.2 |
| layers26: 26 layers, 6,640 components | 72.2 s (71.5–75.0) | 18.2 s (18.0–18.5) | 4.0 | 50.3 s (48.1–51.8) | 3.8 s (3.8–3.9) | 13.2 |
| a production app: 17 Nuxt modules, 614 components | 10.5 s (10.4–10.6) | 8.8 s (8.7–8.9) | 1.2 | 10.5 s (10.4–10.8) | 5.3 s (5.2–5.5) | 2.0 |
| plain Vite + Vue, 8 units, 1,206 components | 10.4 s (10.3–10.5) | 1.3 s (1.3–1.4) | 8.0 | 10.4 s (10.1–10.6) | 1.2 s (1.2–1.3) | 8.7 |

big3, layers26 and the Vite app are generated (`playgrounds/gen-layers.mjs`, `playgrounds/gen-vite-app.mjs`) and live in `playgrounds/`. The production app is private, so it isn't here. It gains little because most of its time isn't bundling. With every environment skipped, a build still takes 5.3 s, nearly all of it Nuxt start-up and its 17 modules. That part isn't cached yet.

Measured on 2026-10-31 on a 16-core Linux laptop that other jobs shared, so absolute times move between runs. Clean builds moved by up to 30% on the same day. Compare the ratios, which come from the same interleaved runs. The raw runs are what `pnpm bench` writes; the summary is [`docs/bench-2026-10-31.txt`](docs/bench-2026-10-31.txt).

The target was 5× on both rows. No change is there. A one-layer change is at 3.7× and 4.0×, and [where the time goes now](#where-the-time-goes-now) says why. This bench predates R7, V4 and the adapter's per-file records below. V4 took 0.5 s off a big3 rebuild in a 4-round A/B, and the records took about 1 s of adapter time off a layers26 rebuild by the adapter's own timings. Neither is in the table until a full bench runs.

## How it works

### What gets snapshotted

A Nuxt build is three Rolldown builds in a row: client, SSR and Nitro (server). Each keeps its own snapshot, with one entry per module. An entry holds the code after every `load` and `transform` hook ran, the module's resolved imports, its `meta`, and the dependencies it was built from, each with a content hash. The next build checks each module's dependencies. When they are unchanged, it takes the entry and skips `resolveId`, `load` and `transform` for that module. Rust re-parses the cached code, so the module graph after the scan is the one a clean build produces, and linking and code generation need no change.

Layers and Nuxt modules are the unit a person changes, and the unit `@unitcache/nuxt` reports ("2 of 26 layers changed"). The snapshot itself is per module, so an edit in one layer re-runs only that layer's edited modules. What still runs in full is everything after the scan: chunking, rendering every chunk, and the output plugin hooks.

A no-change build goes further. If no input of the client and SSR builds changed, the adapter restores their previous output and marks both environments built. Nitro's output comes back the same way, so no environment builds at all.

### The Rolldown fork

rolldown#10159 adds the store: one content-addressed file per module under `<dir>/build-v1/`, keyed by a salt made of the Rolldown version, a user `key` and the plugin names, and by the module's id and source hash. Its description says plugins that rely on side channels, such as `addWatchFile` or `meta`, must not be used with the cache. Vite's, Vue's and Nuxt's plugins all rely on them, so on a Nuxt app the cache reuses wrong output. The fork records those side channels:

- Every file a hook declared with `this.addWatchFile` is a dependency of the module, whether the hook ran in `load`, `transform` or while resolving the module's imports.
- So are the files that decide resolution: the importer's `tsconfig` with its `extends` chain, the `package.json` that governs it, the `paths` and `baseUrl` candidates of each bare import, and the directory entries next to each resolved import (`./dep` depends on the names `dep*` in its folder). A new file that would win a resolution re-runs the importer. A symlink counts with where its chain ends.
- Module `meta` and `moduleSideEffects` are kept as JSON and restored when a reused module's options are first read. That is what Rollup's `cache` does, and Vite and Nuxt plugins keep state there. `meta` that JSON can't bring back unchanged makes the module uncacheable.
- A module isn't reused when its hooks emitted a file, called `this.load`, or resolved to an external with `meta`, since a hit couldn't replay that.
- Ids with a query (`X.vue?vue&type=style`) are keyed by their file, and all ids of one file list each other's dependencies.
- `invalidate: string[]` marks files as changed for inputs a plugin reads without declaring them.
- `build-deps.json` lists every file the build depended on, so a tool can decide to skip a whole build.
- `experimentalCapabilities` (`{ buildCache: 1 }`) lets tools detect all of this without comparing versions.

Profiling the builds turned up per-call costs in Rolldown's JS glue, which every build pays, cache or not. The fork fixes those too (rows R3 to R8 in the table).

### The Nuxt adapter

Rolldown can't see two kinds of Nuxt input, so [`adapter/snapshot.ts`](adapter/snapshot.ts) feeds them in:

- Options that change how every module is transformed go into the cache `key`: Nuxt options, layer configs, the lockfile, the env vars Nuxt reads and the resolved Vite configs. Change one and every module re-runs.
- The component and auto-import registries decide what a name in a template means. When a name resolves to another file than last time, because a component was added, removed or overridden by another layer, every file that mentions the name goes into `invalidate`.

It also handles the environment skip. The decision compares the files under the app and its layers with a record of the last build, one digest per file. It compares paths and sizes first, then reads files newest first and stops at the first difference. A changed build reads almost nothing, and only a no-change build reads every file. A worker thread hashes the files for the next record while the build runs. The record is saved only if no file's stats changed during the build, since an edit mid-build could otherwise be recorded as built. The same records let the adapter restore Nuxt's generated type files instead of regenerating them.

[`adapter/hook-filters.ts`](adapter/hook-filters.ts) gives Rust-side hook filters to plugin hooks that return at once for most calls, so Rolldown skips the call into JS (rows V4, N4, T3).

[`packages/core`](packages/core) (`unitcache`) is a Vite plugin over units, which are folders or packages. It can put each unit in chunks of its own and reports which units changed. [`packages/nuxt`](packages/nuxt) (`@unitcache/nuxt`) maps Nuxt layers and installed module packages to units. Grouping is off by default. On its own, it makes one edit rename more files, because Rolldown folds imported chunks' hashes into each chunk's hash.

### The check

[`scripts/check.mjs`](scripts/check.mjs) runs a list of edits (at the top of the file) against an app. Each edit is built twice, incrementally in a new process from the base snapshot, and clean with no snapshot. The two outputs must be the same. The list has 18 cases for each layer app and 9 for the Vite app: no edit at all, a template, a script, a style, a composable, a type file, a page, a server route, added and removed files, a component used across layers for the first time or no longer, a shared composable, a shared component, a layer overriding another's component, a layer config, an env var read through `define`, and a dependency bump.

"The same" means byte for byte after [`scripts/normdiff.mjs`](scripts/normdiff.mjs) removes the differences two clean builds of the same tree already show. Content hashes in file names are paired between the two trees, and every reference must map to the same file. Timestamps are dropped, along with the `mtime` and `etag` in Nitro's public-asset table. Two Nuxt files that are filled in module order are compared as sets. The generated type files are compared too. Each normalization is there because two clean builds differed without it, and the comparator's own tests are in `scripts/normdiff.test.mjs`.

On the last full check all 58 cases passed on the four apps, 45 of them on the three apps in this repository.

## Where the time goes now

A one-layer big3 rebuild takes 8.3 s. From profiles:

- About 1.3 s is plugin hooks that run once per output chunk. 80% of that is three Vite plugins (`vite:css-post`, `vite:asset`, `vite:build-import-analysis`). Reusing a finished chunk would skip them. Removing every per-chunk hook, which gives wrong output and only measures the most reuse could save, took a 9.75 s rebuild to 6.86 s. But these hooks write Vite's own per-chunk state and read other chunks, so Rolldown can't replay them from a cache. That needs a change in Vite first.
- About 1.2 s is `generateBundle` hooks that walk the whole bundle (Nuxt's build outputs, Vite's preload rewriting).
- About 0.9 s is the SSR scan, much of it Nuxt's `ssr-styles` plugin running per module.
- About 1.6 s is Nuxt start-up. No bundler cache touches it.

Each piece is 0.2 to 1.3 s, so getting further means several separate changes. On the production app, start-up is most of the build.

## Patches by project

Each row is one problem and one change. The patch files are what `pnpm install` applies ([`patches/`](patches)); the Rolldown rows are commits on the fork. Rows marked "adapter" are hook filters this repository adds from outside the plugin, which upstream would be a one-line `filter` in the plugin itself.

### Rolldown

| # | problem | fix | where |
|---|---|---|---|
| R1 | `experimental.buildCache` reuses a module whose `addWatchFile` files, tsconfig, `package.json` or resolution changed, loses its `meta`, and loses files emitted from `transform`. On a Nuxt app that is wrong output. | Each entry lists its dependencies with content hashes and keeps JSON `meta`. Modules whose hooks emit files or call `this.load` aren't cached. Adds `invalidate` and `build-deps.json` (see [the fork](#the-rolldown-fork)). | [`088ade7f4`](https://github.com/onmax/rolldown/commit/088ade7f4) |
| R2 | A tool can't tell whether the installed Rolldown has R1's cache contract without comparing versions. | `experimentalCapabilities` from `rolldown/experimental`. | [`cd0595230`](https://github.com/onmax/rolldown/commit/cd0595230) |
| R3 | Each `generateBundle`/`writeBundle` call rebuilt a JS wrapper for every output, about 1.3 s per big3 build. A property one plugin set on an output was gone for the next plugin, unlike Rollup. | One bundle object per build, shared by the hooks. | [`11a445518`](https://github.com/onmax/rolldown/commit/11a445518), tests [`6bd91091f`](https://github.com/onmax/rolldown/commit/6bd91091f) |
| R4 | Each `renderChunk`/`augmentChunkHash` call got a new chunk object whose fields call into Rust on every read. | One object per chunk for all hooks, the one in `meta.chunks`, as Rollup passes it. | [`b3f041d23`](https://github.com/onmax/rolldown/commit/b3f041d23) |
| R5 | `this.getModuleInfo` copied ten fields from Rust, importer lists included, for callers that mostly read `meta`. | Fields read on first use. | [`c93af8a3e`](https://github.com/onmax/rolldown/commit/c93af8a3e) |
| R6 | Rust passed `generateBundle`/`writeBundle` hooks one JS object per output per hook (3,600 outputs × 15 hooks in a Nitro build). | A bundle view JS reads on demand; when nothing changed since the last hook, JS reuses the bundle without touching outputs. | [`8285e77bf`](https://github.com/onmax/rolldown/commit/8285e77bf) |
| R7 | After each bundle hook, JS walked every output to find what the plugin changed. | Walk only the outputs recorded as changed. | [`cdff8c246`](https://github.com/onmax/rolldown/commit/cdff8c246) |
| R8 | Saving the cache rebuilt every entry's dependency list, about 100 ms per environment even when 3 entries changed. | Group entries by file, compare in place when the list is already in stored order, run in parallel. | [`6687c6d9b`](https://github.com/onmax/rolldown/commit/6687c6d9b) |

### Vite

| # | problem | fix | where |
|---|---|---|---|
| V1 | `vite:css-post` keeps each CSS module's CSS in a map filled by `transform`. A module reused from the cache skips `transform`, so the build ships no CSS. | Also return the CSS as `meta.viteCss` and refill the map in `buildEnd`. | [`patches/vite@8.3.5.patch`](patches/vite@8.3.5.patch) |
| V2 | `vite:build-html` keeps each HTML entry's processed HTML in a map filled by `transform`. A reused entry emits no `index.html`. | Same as V1, through `meta`. | [`patches/vite@8.3.5.patch`](patches/vite@8.3.5.patch) |
| V3 | `vite:css-post`'s `renderChunk` finds `cssScopeTo` owners through a Proxy that scans every chunk on every lookup (chunks × scoped CSS modules), about 0.4 s on big3's client build. | Index the rendered modules once per build. | [`patches/vite@8.3.5.patch`](patches/vite@8.3.5.patch) |
| V4 | In a server environment, `vite:build-import-analysis` runs `augmentChunkHash` for every chunk and returns at once, and its `renderChunk` only replaces `__VITE_IS_MODERN__`. About 6,000 calls into JS per big3 rebuild. | No `augmentChunkHash` and a `/__VITE_IS_MODERN__/` code filter on `renderChunk` when `consumer` is `server`. | adapter: [`adapter/hook-filters.ts`](adapter/hook-filters.ts) |

### @vitejs/plugin-vue

| # | problem | fix | where |
|---|---|---|---|
| P1 | `compileScript()` returns the files an SFC's prop types come from, but the plugin only watches them in dev. A reused SFC keeps stale props when such a file changes. | `this.addWatchFile` them in build too. | [`patches/@vitejs__plugin-vue@6.0.10.patch`](patches/@vitejs__plugin-vue@6.0.10.patch) |

### Nuxt

| # | problem | fix | where |
|---|---|---|---|
| N1 | `ssr-styles` extracts SSR inline styles in `transform` and emits chunks from there, so SSR `.vue` modules can't be reused, and a reused one would lose its styles. | Extract in `moduleParsed`, which runs for reused modules too. | [`patches/@nuxt__vite-builder-nightly@…patch`](patches/@nuxt__vite-builder-nightly@5.0.0-2610291341-744179a.patch) |
| N2 | With N1, `ssr-styles` parses every component's CSS imports and resolves each one again on every build, about 1,600 `this.resolve` round trips per big3 SSR build. | Keep the import list in `meta` keyed on a hash of the code, and the resolutions while no file was added or removed. | same file |
| N3 | `nuxt:stable-entry` searches `meta.chunks` for the entry once per chunk, and runs magic-string and a sourcemap per chunk even without output sourcemaps. | Find the entry once; skip the sourcemap when there is none. | same file |
| N4 | `nuxt:vite-public-dir-resolution`'s `renderChunk` returns at once unless the code has a `url(/…)`, and `nuxt:ssr-styles:client`'s `moduleParsed` returns at once outside SSR. Both cost a call into JS per chunk or module. | A code filter on the first, no `moduleParsed` on the second. | adapter: [`adapter/hook-filters.ts`](adapter/hook-filters.ts) |

### Nitro

| # | problem | fix | where |
|---|---|---|---|
| T1 | `nitro:externals` collects the `node_modules` files to trace in `resolveId`, which reused modules skip. The server output then misses packages (76 files on the production app, `sharp` among them). | Keep each importer's traced paths in `meta` and add them back in `buildEnd`. | [`patches/nitro@3.0.260903-beta.patch`](patches/nitro@3.0.260903-beta.patch) |
| T2 | Nitro records a service environment's entry in that environment's `generateBundle`. An environment whose output was restored never records it. | Keep the entry next to the output. | same file |
| T3 | `fullstack:assets`' `renderChunk` returns at once unless the code mentions `virtual:fullstack/assets-manifest`. | A code filter with that string. | adapter: [`adapter/hook-filters.ts`](adapter/hook-filters.ts) |

## Run it

Tested on Linux x64 with Node 24 and pnpm 12. The fork needs a Rust toolchain (its [contributing guide](https://github.com/rolldown/rolldown/blob/main/CONTRIBUTING.md) lists what it needs).

```sh
git clone -b feat/layer-snapshot-v3 https://github.com/onmax/rolldown
git clone https://github.com/onmax/unitcache
cd unitcache
pnpm install                       # applies patches/*.patch
scripts/build-fork.sh ../rolldown  # builds the fork and points vendor/rolldown at it
```

Then:

```sh
pnpm check --app big3 --rebase     # 18 edits, each built incrementally and clean, compared
pnpm bench --app big3 --rounds 5   # today vs ours, interleaved
pnpm test                          # the adapter's and the comparator's unit tests
```

Apps are `big3`, `layers26` and `vite`. `pnpm use-rolldown stock` switches back to the published Rolldown, and `node scripts/patches.mjs revert` takes the patches out of `node_modules` (the bench does both for "today"). On a machine shared with other jobs, `LAB_RUNNER="<command>"` runs every timed build through a lock command, so the timing excludes the wait. Results go to `results/` and snapshots to `cache/`, both ignored by git.

The fork's own tests are in `packages/rolldown/tests/build-cache-dependencies.test.ts` (47 tests), `shared-output-bundle.test.ts` and `shared-rendered-chunk.test.ts`, plus the Rust `build_cache` tests.

## Layout

```
adapter/        the Nuxt adapter: snapshot.ts, per-file records (files.mjs), hook filters, their tests
packages/core   unitcache, the Vite plugin over units
packages/nuxt   @unitcache/nuxt, layers and module packages as units
patches/        pnpm patches for Vite, plugin-vue, Nuxt and Nitro
playgrounds/    big3, layers26, vite-app, and the generators that made them
scripts/        check, bench, the comparator (normdiff) and setup
vendor/         the Rolldown switch link
```
