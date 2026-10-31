#!/usr/bin/env bash
# Usage: scripts/build-fork.sh <checkout of onmax/rolldown at feat/layer-snapshot-v3>
# Builds the fork's native binding and JS at release opt-level without fat LTO (minutes instead of
# tens of minutes; every number in README.md comes from this profile), then points the workspace at it.
set -euo pipefail
fork=$(cd "$1" && pwd)
export CARGO_PROFILE_RELEASE_LTO=off CARGO_PROFILE_RELEASE_CODEGEN_UNITS=16 CARGO_PROFILE_RELEASE_INCREMENTAL=true
(cd "$fork" && pnpm install)
(cd "$fork/packages/rolldown" && pnpm build-binding --release && pnpm build-js-glue)
node "$(dirname "$0")/use-rolldown.mjs" "$fork/packages/rolldown"
