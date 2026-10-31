<script setup lang="ts">
import type { AdminProps1, AdminItem1 } from '../types/admin-types'

const props = withDefaults(defineProps<AdminProps1 & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: 37,
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: AdminItem1], close: [] }>()
const { count, label, bump } = useAdminState8()
const expanded = ref(false)
const query = ref('')
const route = useRoute()
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => formatAdmin6(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: '%' }))
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: AdminItem1) {
  bump()
  emit('select', item)
}
const notes = reactive<string[]>([])
const section0Open = ref(true)
const section0Rows = computed(() => visible.value
  .filter((item, idx) => idx % 2 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 3 + 0, flagged: item.value > 53 })))
const section0Total = computed(() => section0Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection0 () {
  section0Open.value = !section0Open.value
  if (section0Open.value) bump(1)
}
const section1Open = ref(true)
const section1Rows = computed(() => visible.value
  .filter((item, idx) => idx % 3 === 0 || item.status === 'unknown')
  .map(item => ({ ...item, score: item.value * 4 + 1, flagged: item.value > 76 })))
const section1Total = computed(() => section1Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection1 () {
  section1Open.value = !section1Open.value
  if (section1Open.value) bump(2)
}
const section2Open = ref(false)
const section2Rows = computed(() => visible.value
  .filter((item, idx) => idx % 4 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 5 + 2, flagged: item.value > 68 })))
const section2Total = computed(() => section2Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection2 () {
  section2Open.value = !section2Open.value
  if (section2Open.value) bump(3)
}
const section3Open = ref(true)
const section3Rows = computed(() => visible.value
  .filter((item, idx) => idx % 5 === 0 || item.status === 'unknown')
  .map(item => ({ ...item, score: item.value * 9 + 3, flagged: item.value > 26 })))
const section3Total = computed(() => section3Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection3 () {
  section3Open.value = !section3Open.value
  if (section3Open.value) bump(4)
}
const section4Open = ref(true)
const section4Rows = computed(() => visible.value
  .filter((item, idx) => idx % 6 === 0 || item.status === 'unknown')
  .map(item => ({ ...item, score: item.value * 8 + 4, flagged: item.value > 11 })))
const section4Total = computed(() => section4Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection4 () {
  section4Open.value = !section4Open.value
  if (section4Open.value) bump(5)
}
const section5Open = ref(false)
const section5Rows = computed(() => visible.value
  .filter((item, idx) => idx % 7 === 0 || item.status === 'error')
  .map(item => ({ ...item, score: item.value * 4 + 5, flagged: item.value > 14 })))
const section5Total = computed(() => section5Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection5 () {
  section5Open.value = !section5Open.value
  if (section5Open.value) bump(6)
}
const section6Open = ref(true)
const section6Rows = computed(() => visible.value
  .filter((item, idx) => idx % 8 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 3 + 6, flagged: item.value > 80 })))
const section6Total = computed(() => section6Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection6 () {
  section6Open.value = !section6Open.value
  if (section6Open.value) bump(7)
}
const section7Open = ref(false)
const section7Rows = computed(() => visible.value
  .filter((item, idx) => idx % 9 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 9 + 7, flagged: item.value > 22 })))
const section7Total = computed(() => section7Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection7 () {
  section7Open.value = !section7Open.value
  if (section7Open.value) bump(8)
}
const section8Open = ref(true)
const section8Rows = computed(() => visible.value
  .filter((item, idx) => idx % 10 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 7 + 8, flagged: item.value > 30 })))
const section8Total = computed(() => section8Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection8 () {
  section8Open.value = !section8Open.value
  if (section8Open.value) bump(9)
}
</script>

<template>
  <section :class="['admin-w31', `is-${variant}`, { dense }]" :data-path="route.path">
    <header class="head">
      <h3>{{ title }} <small>{{ label }}</small></h3>
      <input v-model="query" type="search" :placeholder="`Filter ${title}`">
      <button type="button" @click="expanded = !expanded">{{ expanded ? 'Less' : 'More' }}</button>
    </header>
    <ul v-if="mode === 'list'" class="list">
      <li v-for="item in visible" :key="item.id" :class="item.status" @click="onSelect(item)">
        <span class="title">{{ item.title }}</span>
        <span class="value">{{ item.value }}</span>
        <span v-for="tag in item.tags ?? []" :key="tag" class="tag">{{ tag }}</span>
      </li>
    </ul>
    <table v-else-if="mode === 'table'" class="table">
      <tr v-for="item in visible" :key="item.id"><td>{{ item.title }}</td><td>{{ item.status }}</td><td>{{ item.value }}</td></tr>
    </table>
    <div v-else class="grid">
      <article v-for="item in visible" :key="item.id" class="cell">{{ item.title }}: {{ item.value }}</article>
    </div>
    <details :open="section0Open" class="sec sec-0" @toggle="toggleSection0">
      <summary>{{ title }} / Trends ({{ section0Rows.length }}, {{ section0Total.toFixed(1) }})</summary>
      <dl v-for="row in section0Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section0Rows.length" class="empty">No rows in section 0</p>
      <label class="note">Note <input v-model="notes[0]" :name="`admin-note-0`" maxlength="93"></label>
      <button v-if="notes[0]" type="button" class="clear" @click="notes[0] = ''">Clear</button>
    </details>
      <details :open="section1Open" class="sec sec-1" @toggle="toggleSection1">
      <summary>{{ title }} / History ({{ section1Rows.length }}, {{ section1Total.toFixed(1) }})</summary>
      <dl v-for="row in section1Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(1) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section1Rows.length" class="empty">No rows in section 1</p>
      <label class="note">Note <input v-model="notes[1]" :name="`admin-note-1`" maxlength="190"></label>
      <button v-if="notes[1]" type="button" class="clear" @click="notes[1] = ''">Clear</button>
    </details>
      <details :open="section2Open" class="sec sec-2" @toggle="toggleSection2">
      <summary>{{ title }} / Owners ({{ section2Rows.length }}, {{ section2Total.toFixed(1) }})</summary>
      <dl v-for="row in section2Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(2) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section2Rows.length" class="empty">No rows in section 2</p>
      <label class="note">Note <input v-model="notes[2]" :name="`admin-note-2`" maxlength="124"></label>
      <button v-if="notes[2]" type="button" class="clear" @click="notes[2] = ''">Clear</button>
    </details>
      <details :open="section3Open" class="sec sec-3" @toggle="toggleSection3">
      <summary>{{ title }} / Overview ({{ section3Rows.length }}, {{ section3Total.toFixed(1) }})</summary>
      <dl v-for="row in section3Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section3Rows.length" class="empty">No rows in section 3</p>
      <label class="note">Note <input v-model="notes[3]" :name="`admin-note-3`" maxlength="182"></label>
      <button v-if="notes[3]" type="button" class="clear" @click="notes[3] = ''">Clear</button>
    </details>
      <details :open="section4Open" class="sec sec-4" @toggle="toggleSection4">
      <summary>{{ title }} / Owners ({{ section4Rows.length }}, {{ section4Total.toFixed(1) }})</summary>
      <dl v-for="row in section4Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(1) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section4Rows.length" class="empty">No rows in section 4</p>
      <label class="note">Note <input v-model="notes[4]" :name="`admin-note-4`" maxlength="189"></label>
      <button v-if="notes[4]" type="button" class="clear" @click="notes[4] = ''">Clear</button>
    </details>
      <details :open="section5Open" class="sec sec-5" @toggle="toggleSection5">
      <summary>{{ title }} / Events ({{ section5Rows.length }}, {{ section5Total.toFixed(1) }})</summary>
      <dl v-for="row in section5Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(2) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section5Rows.length" class="empty">No rows in section 5</p>
      <label class="note">Note <input v-model="notes[5]" :name="`admin-note-5`" maxlength="144"></label>
      <button v-if="notes[5]" type="button" class="clear" @click="notes[5] = ''">Clear</button>
    </details>
      <details :open="section6Open" class="sec sec-6" @toggle="toggleSection6">
      <summary>{{ title }} / Usage ({{ section6Rows.length }}, {{ section6Total.toFixed(1) }})</summary>
      <dl v-for="row in section6Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section6Rows.length" class="empty">No rows in section 6</p>
      <label class="note">Note <input v-model="notes[6]" :name="`admin-note-6`" maxlength="184"></label>
      <button v-if="notes[6]" type="button" class="clear" @click="notes[6] = ''">Clear</button>
    </details>
      <details :open="section7Open" class="sec sec-7" @toggle="toggleSection7">
      <summary>{{ title }} / Limits ({{ section7Rows.length }}, {{ section7Total.toFixed(1) }})</summary>
      <dl v-for="row in section7Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(1) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section7Rows.length" class="empty">No rows in section 7</p>
      <label class="note">Note <input v-model="notes[7]" :name="`admin-note-7`" maxlength="140"></label>
      <button v-if="notes[7]" type="button" class="clear" @click="notes[7] = ''">Clear</button>
    </details>
      <details :open="section8Open" class="sec sec-8" @toggle="toggleSection8">
      <summary>{{ title }} / Usage ({{ section8Rows.length }}, {{ section8Total.toFixed(1) }})</summary>
      <dl v-for="row in section8Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(2) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section8Rows.length" class="empty">No rows in section 8</p>
      <label class="note">Note <input v-model="notes[8]" :name="`admin-note-8`" maxlength="155"></label>
      <button v-if="notes[8]" type="button" class="clear" @click="notes[8] = ''">Clear</button>
    </details>
    <footer class="foot">
      <span>{{ summary }}</span><span>{{ count }}</span>
      <AdminWidget15 title="AdminWidget15" :items="[]" />
      <AdminWidget21 title="AdminWidget21" :items="[]" />
      <UiTable title="UiTable" :items="[]" />
      <CorePanel10 title="CorePanel10" :items="[]" />
    </footer>
  </section>
</template>

<style scoped>
.admin-w31 { display: grid; gap: 7px; padding: 16px; border: 1px solid #417100; }
.admin-w31.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: 20px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); }
.foot { display: flex; gap: 12px; opacity: .5; }
.note input { width: 28ch; } .clear { margin-left: 4px; } .empty { color: #888; }
.sec-0 { margin-top: 7px; border-top: 1px dashed #858521; }
.sec-0 summary { font-weight: 600; cursor: pointer; }
.sec-0 .row { display: grid; grid-template-columns: 177px 1fr auto; gap: 8px; }
.sec-0 .row.flagged dt { text-decoration: underline; color: #516071; }
.sec-1 { margin-top: 10px; border-top: 3px dotted #214889; }
.sec-1 summary { font-weight: 600; cursor: pointer; }
.sec-1 .row { display: grid; grid-template-columns: 150px 1fr auto; gap: 6px; }
.sec-1 .row.flagged dt { text-decoration: underline; color: #549374; }
.sec-2 { margin-top: 4px; border-top: 1px dotted #983852; }
.sec-2 summary { font-weight: 500; cursor: pointer; }
.sec-2 .row { display: grid; grid-template-columns: 99px 1fr auto; gap: 2px; }
.sec-2 .row.flagged dt { text-decoration: underline; color: #560902; }
.sec-3 { margin-top: 11px; border-top: 3px solid #711350; }
.sec-3 summary { font-weight: 600; cursor: pointer; }
.sec-3 .row { display: grid; grid-template-columns: 132px 1fr auto; gap: 4px; }
.sec-3 .row.flagged dt { text-decoration: underline; color: #995620; }
.sec-4 { margin-top: 7px; border-top: 3px dotted #327293; }
.sec-4 summary { font-weight: 600; cursor: pointer; }
.sec-4 .row { display: grid; grid-template-columns: 103px 1fr auto; gap: 5px; }
.sec-4 .row.flagged dt { text-decoration: underline; color: #304936; }
.sec-5 { margin-top: 7px; border-top: 1px dashed #299891; }
.sec-5 summary { font-weight: 600; cursor: pointer; }
.sec-5 .row { display: grid; grid-template-columns: 170px 1fr auto; gap: 4px; }
.sec-5 .row.flagged dt { text-decoration: underline; color: #997747; }
.sec-6 { margin-top: 2px; border-top: 2px dotted #148316; }
.sec-6 summary { font-weight: 700; cursor: pointer; }
.sec-6 .row { display: grid; grid-template-columns: 80px 1fr auto; gap: 3px; }
.sec-6 .row.flagged dt { text-decoration: underline; color: #610525; }
.sec-7 { margin-top: 9px; border-top: 3px dotted #398139; }
.sec-7 summary { font-weight: 600; cursor: pointer; }
.sec-7 .row { display: grid; grid-template-columns: 127px 1fr auto; gap: 9px; }
.sec-7 .row.flagged dt { text-decoration: underline; color: #444016; }
.sec-8 { margin-top: 5px; border-top: 1px solid #516371; }
.sec-8 summary { font-weight: 400; cursor: pointer; }
.sec-8 .row { display: grid; grid-template-columns: 127px 1fr auto; gap: 10px; }
.sec-8 .row.flagged dt { text-decoration: underline; color: #797689; }
</style>
