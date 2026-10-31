// node --expose-gc scripts/parallel-chunk.test.mjs: a parallel plugin's worker context is never
// cleared; across six watch rebuilds it must see each build's chunk data and hold no more than the
// last output's chunks (Rolldown commit b3f041d23). It uses watch mode and runs outside the fork's
// vitest because a parallel plugin with hooks fails with `Closing` on the generate()/close() path
// (rolldown#10530).
import os from 'node:os';
import assert from 'node:assert/strict';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const dist = join(import.meta.dirname, '../vendor/rolldown/dist');
const { watch } = await import(join(dist, 'index.mjs'));
const { defineParallelPlugin } = await import(join(dist, 'experimental-index.mjs'));
os.availableParallelism = () => 1;
const S = join(import.meta.dirname, '..');
const root = join(S, 'tmp', 'parallel-chunk-app');
rmSync(root, { recursive: true, force: true });
mkdirSync(root, { recursive: true });
const report = join(root, 'worker-live.json');
const input = join(root, 'main.js');
function update(i) {
  writeFileSync(join(root, `lazy${i}.js`), `console.log('lazy${i}');`);
  writeFileSync(input, `export const value${i}=${i}; import('./lazy${i}.js');`);
}
update(0);
const plugin = defineParallelPlugin(join(import.meta.dirname, 'parallel-chunk/worker.mjs'));
const watcher = watch({ cwd: root, input, output: { dir: join(root, 'out'), format: 'es', chunkFileNames: '[name].js' }, plugins: [plugin({ report })] });
let count = 0;
try {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('watch timeout')), 20000);
    watcher.on('event', e => {
      if (e.code === 'ERROR') { clearTimeout(timer); reject(e.error); }
      if (e.code !== 'BUNDLE_END') return;
      try {
        const code = readFileSync(join(root, 'out/main.js'), 'utf8');
        assert.ok(code.includes(`console.log(["value${count}"])`), 'worker must see current exports');
        // Seen at the next renderStart: the worker holds at most the last output's chunks.
        const live = JSON.parse(readFileSync(report, 'utf8'));
        assert.ok(live.length <= 2, `worker keeps chunks of earlier outputs: ${live}`);
        console.log('ok rebuild', count, 'current exports, live chunk bindings', live.join(' '));
        if (++count < 6) update(count);
        else { clearTimeout(timer); resolve(); }
      } catch (err) { clearTimeout(timer); reject(err); }
    });
  });
} finally { await watcher.close(); }

rmSync(root, { recursive: true, force: true });
