<script setup lang="ts">
import type { ReportsProps3, ReportsItem3 } from '../types/reports-types'

const props = withDefaults(defineProps<ReportsProps3 & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: 48,
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: ReportsItem3], close: [] }>()
const { count, label, bump } = useReportsState14()
const expanded = ref(false)
const query = ref('')
const route = useRoute()
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => formatReports11(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: 'kW' }))
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: ReportsItem3) {
  bump()
  emit('select', item)
}
const notes = reactive<string[]>([])
const section0Open = ref(false)
const section0Rows = computed(() => visible.value
  .filter((item, idx) => idx % 2 === 0 || item.status === 'error')
  .map(item => ({ ...item, score: item.value * 8 + 0, flagged: item.value > 55 })))
const section0Total = computed(() => section0Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection0 () {
  section0Open.value = !section0Open.value
  if (section0Open.value) bump(1)
}
const section1Open = ref(false)
const section1Rows = computed(() => visible.value
  .filter((item, idx) => idx % 3 === 0 || item.status === 'error')
  .map(item => ({ ...item, score: item.value * 7 + 1, flagged: item.value > 57 })))
const section1Total = computed(() => section1Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection1 () {
  section1Open.value = !section1Open.value
  if (section1Open.value) bump(2)
}
const section2Open = ref(false)
const section2Rows = computed(() => visible.value
  .filter((item, idx) => idx % 4 === 0 || item.status === 'unknown')
  .map(item => ({ ...item, score: item.value * 4 + 2, flagged: item.value > 38 })))
const section2Total = computed(() => section2Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection2 () {
  section2Open.value = !section2Open.value
  if (section2Open.value) bump(3)
}
const section3Open = ref(true)
const section3Rows = computed(() => visible.value
  .filter((item, idx) => idx % 5 === 0 || item.status === 'error')
  .map(item => ({ ...item, score: item.value * 5 + 3, flagged: item.value > 29 })))
const section3Total = computed(() => section3Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection3 () {
  section3Open.value = !section3Open.value
  if (section3Open.value) bump(4)
}
const section4Open = ref(false)
const section4Rows = computed(() => visible.value
  .filter((item, idx) => idx % 6 === 0 || item.status === 'error')
  .map(item => ({ ...item, score: item.value * 2 + 4, flagged: item.value > 34 })))
const section4Total = computed(() => section4Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection4 () {
  section4Open.value = !section4Open.value
  if (section4Open.value) bump(5)
}
const section5Open = ref(true)
const section5Rows = computed(() => visible.value
  .filter((item, idx) => idx % 7 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 9 + 5, flagged: item.value > 10 })))
const section5Total = computed(() => section5Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection5 () {
  section5Open.value = !section5Open.value
  if (section5Open.value) bump(6)
}
const section6Open = ref(false)
const section6Rows = computed(() => visible.value
  .filter((item, idx) => idx % 8 === 0 || item.status === 'error')
  .map(item => ({ ...item, score: item.value * 8 + 6, flagged: item.value > 23 })))
const section6Total = computed(() => section6Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection6 () {
  section6Open.value = !section6Open.value
  if (section6Open.value) bump(7)
}
const section7Open = ref(false)
const section7Rows = computed(() => visible.value
  .filter((item, idx) => idx % 9 === 0 || item.status === 'unknown')
  .map(item => ({ ...item, score: item.value * 2 + 7, flagged: item.value > 35 })))
const section7Total = computed(() => section7Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection7 () {
  section7Open.value = !section7Open.value
  if (section7Open.value) bump(8)
}
const section8Open = ref(false)
const section8Rows = computed(() => visible.value
  .filter((item, idx) => idx % 10 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 3 + 8, flagged: item.value > 58 })))
const section8Total = computed(() => section8Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection8 () {
  section8Open.value = !section8Open.value
  if (section8Open.value) bump(9)
}
</script>

<template>
  <section :class="['reports-w45', `is-${variant}`, { dense }]" :data-path="route.path">
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
      <summary>{{ title }} / Notes ({{ section0Rows.length }}, {{ section0Total.toFixed(1) }})</summary>
      <dl v-for="row in section0Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section0Rows.length" class="empty">No rows in section 0</p>
      <label class="note">Note <input v-model="notes[0]" :name="`reports-note-0`" maxlength="62"></label>
      <button v-if="notes[0]" type="button" class="clear" @click="notes[0] = ''">Clear</button>
    </details>
      <details :open="section1Open" class="sec sec-1" @toggle="toggleSection1">
      <summary>{{ title }} / Owners ({{ section1Rows.length }}, {{ section1Total.toFixed(1) }})</summary>
      <dl v-for="row in section1Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(1) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section1Rows.length" class="empty">No rows in section 1</p>
      <label class="note">Note <input v-model="notes[1]" :name="`reports-note-1`" maxlength="100"></label>
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
      <label class="note">Note <input v-model="notes[2]" :name="`reports-note-2`" maxlength="125"></label>
      <button v-if="notes[2]" type="button" class="clear" @click="notes[2] = ''">Clear</button>
    </details>
      <details :open="section3Open" class="sec sec-3" @toggle="toggleSection3">
      <summary>{{ title }} / Usage ({{ section3Rows.length }}, {{ section3Total.toFixed(1) }})</summary>
      <dl v-for="row in section3Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section3Rows.length" class="empty">No rows in section 3</p>
      <label class="note">Note <input v-model="notes[3]" :name="`reports-note-3`" maxlength="112"></label>
      <button v-if="notes[3]" type="button" class="clear" @click="notes[3] = ''">Clear</button>
    </details>
      <details :open="section4Open" class="sec sec-4" @toggle="toggleSection4">
      <summary>{{ title }} / Limits ({{ section4Rows.length }}, {{ section4Total.toFixed(1) }})</summary>
      <dl v-for="row in section4Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(1) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section4Rows.length" class="empty">No rows in section 4</p>
      <label class="note">Note <input v-model="notes[4]" :name="`reports-note-4`" maxlength="42"></label>
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
      <label class="note">Note <input v-model="notes[5]" :name="`reports-note-5`" maxlength="111"></label>
      <button v-if="notes[5]" type="button" class="clear" @click="notes[5] = ''">Clear</button>
    </details>
      <details :open="section6Open" class="sec sec-6" @toggle="toggleSection6">
      <summary>{{ title }} / Overview ({{ section6Rows.length }}, {{ section6Total.toFixed(1) }})</summary>
      <dl v-for="row in section6Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section6Rows.length" class="empty">No rows in section 6</p>
      <label class="note">Note <input v-model="notes[6]" :name="`reports-note-6`" maxlength="172"></label>
      <button v-if="notes[6]" type="button" class="clear" @click="notes[6] = ''">Clear</button>
    </details>
      <details :open="section7Open" class="sec sec-7" @toggle="toggleSection7">
      <summary>{{ title }} / History ({{ section7Rows.length }}, {{ section7Total.toFixed(1) }})</summary>
      <dl v-for="row in section7Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(1) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section7Rows.length" class="empty">No rows in section 7</p>
      <label class="note">Note <input v-model="notes[7]" :name="`reports-note-7`" maxlength="167"></label>
      <button v-if="notes[7]" type="button" class="clear" @click="notes[7] = ''">Clear</button>
    </details>
      <details :open="section8Open" class="sec sec-8" @toggle="toggleSection8">
      <summary>{{ title }} / History ({{ section8Rows.length }}, {{ section8Total.toFixed(1) }})</summary>
      <dl v-for="row in section8Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(2) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section8Rows.length" class="empty">No rows in section 8</p>
      <label class="note">Note <input v-model="notes[8]" :name="`reports-note-8`" maxlength="193"></label>
      <button v-if="notes[8]" type="button" class="clear" @click="notes[8] = ''">Clear</button>
    </details>
    <footer class="foot">
      <span>{{ summary }}</span><span>{{ count }}</span>
      <UiInput title="UiInput" :items="[]" />
      <UiTabs title="UiTabs" :items="[]" />
      <UiSelect title="UiSelect" :items="[]" />
      <CorePanel18 title="CorePanel18" :items="[]" />
    </footer>
  </section>
</template>

<style scoped>
.reports-w45 { display: grid; gap: 15px; padding: 12px; border: 1px solid #489417; }
.reports-w45.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: 20px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); }
.foot { display: flex; gap: 12px; opacity: .6; }
.note input { width: 16ch; } .clear { margin-left: 4px; } .empty { color: #888; }
.sec-0 { margin-top: 7px; border-top: 1px solid #602941; }
.sec-0 summary { font-weight: 400; cursor: pointer; }
.sec-0 .row { display: grid; grid-template-columns: 147px 1fr auto; gap: 5px; }
.sec-0 .row.flagged dt { text-decoration: underline; color: #731316; }
.sec-1 { margin-top: 7px; border-top: 1px solid #401469; }
.sec-1 summary { font-weight: 500; cursor: pointer; }
.sec-1 .row { display: grid; grid-template-columns: 103px 1fr auto; gap: 4px; }
.sec-1 .row.flagged dt { text-decoration: underline; color: #887816; }
.sec-2 { margin-top: 10px; border-top: 2px dashed #983755; }
.sec-2 summary { font-weight: 600; cursor: pointer; }
.sec-2 .row { display: grid; grid-template-columns: 81px 1fr auto; gap: 9px; }
.sec-2 .row.flagged dt { text-decoration: underline; color: #922514; }
.sec-3 { margin-top: 6px; border-top: 3px solid #401307; }
.sec-3 summary { font-weight: 400; cursor: pointer; }
.sec-3 .row { display: grid; grid-template-columns: 152px 1fr auto; gap: 7px; }
.sec-3 .row.flagged dt { text-decoration: underline; color: #791778; }
.sec-4 { margin-top: 10px; border-top: 3px dashed #894394; }
.sec-4 summary { font-weight: 400; cursor: pointer; }
.sec-4 .row { display: grid; grid-template-columns: 100px 1fr auto; gap: 5px; }
.sec-4 .row.flagged dt { text-decoration: underline; color: #900709; }
.sec-5 { margin-top: 11px; border-top: 2px dotted #803164; }
.sec-5 summary { font-weight: 700; cursor: pointer; }
.sec-5 .row { display: grid; grid-template-columns: 181px 1fr auto; gap: 2px; }
.sec-5 .row.flagged dt { text-decoration: underline; color: #752928; }
.sec-6 { margin-top: 10px; border-top: 1px dashed #219281; }
.sec-6 summary { font-weight: 600; cursor: pointer; }
.sec-6 .row { display: grid; grid-template-columns: 156px 1fr auto; gap: 8px; }
.sec-6 .row.flagged dt { text-decoration: underline; color: #583505; }
.sec-7 { margin-top: 4px; border-top: 2px dashed #636214; }
.sec-7 summary { font-weight: 600; cursor: pointer; }
.sec-7 .row { display: grid; grid-template-columns: 129px 1fr auto; gap: 8px; }
.sec-7 .row.flagged dt { text-decoration: underline; color: #441602; }
.sec-8 { margin-top: 6px; border-top: 2px dashed #802299; }
.sec-8 summary { font-weight: 500; cursor: pointer; }
.sec-8 .row { display: grid; grid-template-columns: 81px 1fr auto; gap: 9px; }
.sec-8 .row.flagged dt { text-decoration: underline; color: #798098; }
</style>
