import { createRequire } from 'node:module';
import { setImmediate as tick } from 'node:timers/promises';
import { writeFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const { BindingRenderedChunk } = require(new URL('../../vendor/rolldown/dist/rolldown-binding.linux-x64-gnu.node', import.meta.url).pathname);
const oldIdentity = BindingRenderedChunk.prototype.getIdentity;
const handles = [];
BindingRenderedChunk.prototype.getIdentity = function () {
  handles.push({ name: this.fileName, ref: new WeakRef(this) });
  return oldIdentity.call(this);
};
const keepAlive = setInterval(() => {}, 1000);
export default ({ report }) => ({
  name: 'worker-lifetime',
  async renderStart() {
    for (let n = 0; n < 3; n++) { await tick(); global.gc(); }
    await tick();
    const live = [...new Set(handles.filter(h => h.ref.deref()).map(h => h.name))].sort();
    writeFileSync(report, JSON.stringify(live));
  },
  renderChunk(code, chunk) {
    return code + '\nconsole.log(' + JSON.stringify(chunk.exports) + ')';
  },
  closeBundle() { clearInterval(keepAlive); },
});
