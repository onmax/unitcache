# unitcache

Incremental production builds for Nuxt 5 apps. A build keeps a snapshot of its work on disk. The next build, in a new process such as a CI job, redoes only the modules whose inputs changed, and skips the client, SSR and Nitro builds when nothing they read changed. The output matches a clean build: a check builds 27 edits on two public Nuxt apps both ways and compares the results file by file.

It runs on a fork of [Rolldown](https://github.com/rolldown/rolldown) ([`onmax/rolldown`, branch `feat/layer-snapshot-v3`](https://github.com/onmax/rolldown/tree/feat/layer-snapshot-v3)) that builds on [rolldown#10159](https://github.com/rolldown/rolldown/pull/10159) (`experimental.buildCache`, by Christian Vuerings), plus small patches to Vite, plugin-vue, Nuxt, nuxt-og-image and Nitro. Every patch is listed [below](#patches-by-project), one row each, so maintainers can read their own rows as separate issues.

This is research code. Nothing here is published to npm, and the Rolldown fork has to be built from source. Coding agents wrote the code and these docs, and four of my skills cleaned them up: [`unslop`](https://github.com/onmax/skills/tree/main/skills/unslop) and [`emil-unslop-writing`](https://github.com/onmax/skills/tree/main/skills/emil-unslop-writing) for the prose, [`emil-unslop-code`](https://github.com/onmax/skills/tree/main/skills/emil-unslop-code) for the code, and [`emil-unslop-design`](https://github.com/onmax/skills/tree/main/skills/emil-unslop-design), which had nothing to check because there is no UI.

## Results

Median of 5 interleaved rounds (min–max), each build in a new process, on an idle 4-core Linux server. "Today" is stock Nuxt 5 nightly with Nuxt's own `experimental.buildCache` and a warm cache. "Ours" is this repository: the fork, the patches and the adapter, starting from a copy of the snapshot the previous build left. The one-file edit changes a component with text no cache has seen.

| app | today, one-file edit | ours | × | today, no change | ours | × |
|---|---|---|---|---|---|---|
| [`dashboard`](playgrounds/dashboard): Nuxt UI, server routes | 10.6 s (10.6–10.7) | 6.0 s (5.9–6.0) | 1.8 | 7.7 s (7.5–7.9) | 2.1 s (2.1–2.1) | 3.7 |
| [`saas`](playgrounds/saas): Nuxt UI, Nuxt Content, OG images, 34 prerendered routes | 19.1 s (18.8–19.5) | 12.4 s (12.2–12.5) | 1.5 | 15.3 s (15.2–15.6) | 6.7 s (6.6–6.9) | 2.3 |
| a production app: 147 pages, 1,527 components, 16 Nuxt modules | 16.8 s (16.6–17.2) | 13.9 s (13.8–14.2) | 1.2 | 17.1 s (16.6–17.3) | 8.1 s (8.0–8.3) | 2.1 |

`dashboard` and `saas` are the [Nuxt UI templates](https://github.com/nuxt-ui-templates) of the same names (commits `db412be` and `e0e8d3c`), moved to Nuxt 5 nightly and Nitro 3. The only other changes are one line in each `nuxt.config.ts` that wraps the config in [`lab()`](playgrounds/lab.ts), and, in `saas`, a seeded generator for the random stars in `StarsBg.vue` so two builds prerender the same page. The production app is private. It ran on the same machine on 2026-10-31 with an earlier copy of the adapter, before the fixes for N5, O1 and Nuxt Content edits below.

The raw runs are what `pnpm bench` writes; the summary is [`docs/bench-2026-11-01.txt`](docs/bench-2026-11-01.txt).

The gains are small because most of a build on these apps isn't the work a module cache skips:

- Nuxt start-up (config, modules, app templates, types) takes 1.6 s on `dashboard` and 2.7 s on `saas` in every build, cached or not.
- After the scan, every chunk is still rendered and every output hook still runs.
- `saas` prerenders its 34 routes in about 3 s on every build, even when nothing changed.

On the production app, start-up is most of the build, which is why it gains least.

An earlier version targeted apps made of many Nuxt layers. On generated apps with 12 and 26 layers it was 3.7–4× faster on a one-layer edit and 10–13× on no change. Splitting the production app into 22 layers made every build about 9.5 s slower in Nuxt start-up, cache or not, so this repository now targets ordinary Nuxt apps.

## How it works

### What gets snapshotted

A Nuxt build is three Rolldown builds in a row: client, SSR and Nitro (server). Each keeps its own snapshot, with one entry per module. An entry holds the code after every `load` and `transform` hook ran, the module's resolved imports, its `meta`, and the dependencies it was built from, each with a content hash. The next build checks each module's dependencies. When they are unchanged, it takes the entry and skips `resolveId`, `load` and `transform` for that module. Rust re-parses the cached code, so the module graph after the scan is the one a clean build produces, and linking and code generation need no change.

An edit re-runs the edited modules and the modules whose dependencies it changed. What still runs in full is everything after the scan: chunking, rendering every chunk, and the output plugin hooks.

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

- Options that change how every module is transformed go into the cache `key`: Nuxt options, layer configs, the lockfile, the env vars Nuxt reads, the resolved Nitro, runtime and app config, and the resolved Vite configs. Change one and every module re-runs. Build templates' options stay out: their output reaches the build as files and virtual modules the cache already tracks, and some hold app data (Nuxt Content passes its whole database dump there, so with them every content edit re-ran every module).
- The component and auto-import registries decide what a name in a template means. When a name resolves to another file than last time, because a component was added, removed or overridden, every file that mentions the name goes into `invalidate`.

It also handles the environment skip. The decision compares the files under the app and its layers with a record of the last build, one digest per file. It compares paths and sizes first, then reads files newest first and stops at the first difference. A changed build reads almost nothing, and only a no-change build reads every file. A worker thread hashes the files for the next record while the build runs. The record is saved only if no file's stats changed during the build, since an edit mid-build could otherwise be recorded as built. The same records let the adapter restore Nuxt's generated type files instead of regenerating them.

[`adapter/hook-filters.ts`](adapter/hook-filters.ts) gives Rust-side hook filters to plugin hooks that return at once for most calls, so Rolldown skips the call into JS (rows V4, N4, T3).

### The check

[`scripts/check.mjs`](scripts/check.mjs) runs a list of edits (at the top of the file) against an app. Each edit is built twice, incrementally in a new process from the base snapshot, and clean with no snapshot. The two outputs must be the same. `dashboard` has 15 cases: no edit, a template, a script, a Tailwind class no file used before, the CSS file, a composable, a util, a type file, a page, a server route, an added component, a removed page, the app config, the Nuxt config and a dependency bump. `saas` has 12: no edit, a template, a page, a new Tailwind class, the CSS file, the OG image component, a Markdown file, a YAML file, an added Markdown file, the app config, the Nuxt config and a dependency bump.

"The same" means byte for byte after [`scripts/normdiff.mjs`](scripts/normdiff.mjs) removes the differences two clean builds of the same tree already show. Content hashes in file names are paired between the two trees, and every reference must map to the same file. Timestamps are dropped, along with the `mtime` and `etag` in Nitro's public-asset table and the prerender time Nuxt writes into each prerendered page. Two Nuxt files that are filled in module order are compared as sets. The generated type files are compared too. Each normalization is there because two clean builds differed without it, and the comparator's own tests are in `scripts/normdiff.test.mjs`.

On the last full check all 27 cases passed. It found the bugs fixed in N5 and O1, and the content edits that re-ran every module. Nuxt's own `experimental.buildCache` has the opposite problem: it reuses the old build after a content edit ([nuxt#36797](https://github.com/nuxt/nuxt/issues/36797)).

## Patches by project

Each row is one problem and one change. The patch files are what `pnpm install` applies ([`patches/`](patches)); the Rolldown rows are commits on the fork. Rows marked "adapter" are hook filters this repository adds from outside the plugin, which upstream would be a one-line `filter` in the plugin itself.

### Rolldown

| # | problem | fix | where |
|---|---|---|---|
| R1 | `experimental.buildCache` reuses a module whose `addWatchFile` files, tsconfig, `package.json` or resolution changed, loses its `meta`, and loses files emitted from `transform`. On a Nuxt app that is wrong output. | Each entry lists its dependencies with content hashes and keeps JSON `meta`. Modules whose hooks emit files or call `this.load` aren't cached. Adds `invalidate` and `build-deps.json` (see [the fork](#the-rolldown-fork)). | [`088ade7f4`](https://github.com/onmax/rolldown/commit/088ade7f4) |
| R2 | A tool can't tell whether the installed Rolldown has R1's cache contract without comparing versions. | `experimentalCapabilities` from `rolldown/experimental`. | [`cd0595230`](https://github.com/onmax/rolldown/commit/cd0595230) |
| R3 | Each `generateBundle`/`writeBundle` call rebuilt a JS wrapper for every output, about 1.3 s per build of a generated app with 2,860 components. A property one plugin set on an output was gone for the next plugin, unlike Rollup. | One bundle object per build, shared by the hooks. | [`11a445518`](https://github.com/onmax/rolldown/commit/11a445518), tests [`6bd91091f`](https://github.com/onmax/rolldown/commit/6bd91091f) |
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
| V3 | `vite:css-post`'s `renderChunk` finds `cssScopeTo` owners through a Proxy that scans every chunk on every lookup (chunks × scoped CSS modules), about 0.4 s on that generated app's client build. | Index the rendered modules once per build. | [`patches/vite@8.3.5.patch`](patches/vite@8.3.5.patch) |
| V4 | In a server environment, `vite:build-import-analysis` runs `augmentChunkHash` for every chunk and returns at once, and its `renderChunk` only replaces `__VITE_IS_MODERN__`. About 6,000 calls into JS per rebuild of the generated app. | No `augmentChunkHash` and a `/__VITE_IS_MODERN__/` code filter on `renderChunk` when `consumer` is `server`. | adapter: [`adapter/hook-filters.ts`](adapter/hook-filters.ts) |

### @vitejs/plugin-vue

| # | problem | fix | where |
|---|---|---|---|
| P1 | `compileScript()` returns the files an SFC's prop types come from, but the plugin only watches them in dev. A reused SFC keeps stale props when such a file changes. | `this.addWatchFile` them in build too. | [`patches/@vitejs__plugin-vue@6.0.10.patch`](patches/@vitejs__plugin-vue@6.0.10.patch) |

### Nuxt

| # | problem | fix | where |
|---|---|---|---|
| N1 | `ssr-styles` extracts SSR inline styles in `transform` and emits chunks from there, so SSR `.vue` modules can't be reused, and a reused one would lose its styles. | Extract in `moduleParsed`, which runs for reused modules too. | [`patches/@nuxt__vite-builder-nightly@…patch`](patches/@nuxt__vite-builder-nightly@5.0.0-2610291341-744179a.patch) |
| N2 | With N1, `ssr-styles` parses every component's CSS imports and resolves each one again on every build, about 1,600 `this.resolve` round trips per SSR build of the generated app. | Keep the import list in `meta` keyed on a hash of the code, and the resolutions while no file was added or removed. | same file |
| N3 | `nuxt:stable-entry` searches `meta.chunks` for the entry once per chunk, and runs magic-string and a sourcemap per chunk even without output sourcemaps. | Find the entry once; skip the sourcemap when there is none. | same file |
| N4 | `nuxt:vite-public-dir-resolution`'s `renderChunk` returns at once unless the code has a `url(/…)`, and `nuxt:ssr-styles:client`'s `moduleParsed` returns at once outside SSR. Both cost a call into JS per chunk or module. | A code filter on the first, no `moduleParsed` on the second. | adapter: [`adapter/hook-filters.ts`](adapter/hook-filters.ts) |
| N5 | `paths.mjs` imports `ufo` by its absolute path. In the SSR build `nuxt:resolve-externals` makes every other import of `ufo` external, but this one resolves to a module. Rolldown keeps whichever resolution of the file comes first, so the SSR output depends on the order modules load: a build from the snapshot bundles `ufo`, a clean one doesn't. Stock Nuxt has it too when some transforms are slower ([nuxt#36795](https://github.com/nuxt/nuxt/issues/36795), [rolldown#11417](https://github.com/rolldown/rolldown/issues/11417)). | Resolve an absolute import of a package's entry the way the bare import resolves. | same file |

### nuxt-og-image

| # | problem | fix | where |
|---|---|---|---|
| O1 | OG image components get inline styles from the app config's colors and the Tailwind CSS file, read while transforming the component but not declared. A reused component keeps the old colors after `app.config.ts` changes. Stock users see the same in `nuxt dev` and with og-image's own `buildCache`; a fuller fix is on [`onmax/og-image`](https://github.com/onmax/og-image/tree/fix/og-image-style-inputs). | `this.addWatchFile` the app config files and the CSS file. | [`patches/nuxt-og-image@7.0.7.patch`](patches/nuxt-og-image@7.0.7.patch) |

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
pnpm check --app dashboard --rebase   # 15 edits, each built incrementally and clean, compared
pnpm bench --app dashboard --rounds 5 # today vs ours, interleaved
pnpm test                             # the adapter's and the comparator's unit tests
```

Apps are `dashboard` and `saas`. `pnpm use-rolldown stock` switches back to the published Rolldown, and `node scripts/patches.mjs revert` takes the patches out of `node_modules` (the bench does both for "today"). On a machine shared with other jobs, `LAB_RUNNER="<command>"` runs every timed build through a lock command, so the timing excludes the wait. Results go to `results/` and snapshots to `cache/`, both ignored by git.

The fork's own tests are in `packages/rolldown/tests/build-cache-dependencies.test.ts` (47 tests), `shared-output-bundle.test.ts` and `shared-rendered-chunk.test.ts`, plus the Rust `build_cache` tests.

## Layout

```
adapter/        the Nuxt adapter: snapshot.ts, per-file records (files.mjs), hook filters, their tests
patches/        pnpm patches for Vite, plugin-vue, Nuxt, nuxt-og-image and Nitro
playgrounds/    dashboard and saas, and lab.ts, the config wrapper with the env switches
scripts/        check, bench, the comparator (normdiff) and setup
vendor/         the Rolldown switch link
```
