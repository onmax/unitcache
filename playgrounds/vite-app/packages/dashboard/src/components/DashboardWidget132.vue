<script setup lang="ts">
import type { DashboardProps0, DashboardItem0 } from '../types/dashboard-types'

const props = withDefaults(defineProps<DashboardProps0 & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: 50,
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: DashboardItem0], close: [] }>()
const { count, label, bump } = useDashboardState7()
const expanded = ref(false)
const query = ref('')
const route = useRoute()
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => formatDashboard2(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: '%' }))
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: DashboardItem0) {
  bump()
  emit('select', item)
}
const notes = reactive<string[]>([])
const section0Open = ref(false)
const section0Rows = computed(() => visible.value
  .filter((item, idx) => idx % 2 === 0 || item.status === 'unknown')
  .map(item => ({ ...item, score: item.value * 6 + 0, flagged: item.value > 21 })))
const section0Total = computed(() => section0Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection0 () {
  section0Open.value = !section0Open.value
  if (section0Open.value) bump(1)
}
const section1Open = ref(true)
const section1Rows = computed(() => visible.value
  .filter((item, idx) => idx % 3 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 6 + 1, flagged: item.value > 31 })))
const section1Total = computed(() => section1Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection1 () {
  section1Open.value = !section1Open.value
  if (section1Open.value) bump(2)
}
const section2Open = ref(false)
const section2Rows = computed(() => visible.value
  .filter((item, idx) => idx % 4 === 0 || item.status === 'unknown')
  .map(item => ({ ...item, score: item.value * 9 + 2, flagged: item.value > 34 })))
const section2Total = computed(() => section2Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection2 () {
  section2Open.value = !section2Open.value
  if (section2Open.value) bump(3)
}
const section3Open = ref(false)
const section3Rows = computed(() => visible.value
  .filter((item, idx) => idx % 5 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 9 + 3, flagged: item.value > 52 })))
const section3Total = computed(() => section3Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection3 () {
  section3Open.value = !section3Open.value
  if (section3Open.value) bump(4)
}
const section4Open = ref(true)
const section4Rows = computed(() => visible.value
  .filter((item, idx) => idx % 6 === 0 || item.status === 'unknown')
  .map(item => ({ ...item, score: item.value * 7 + 4, flagged: item.value > 18 })))
const section4Total = computed(() => section4Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection4 () {
  section4Open.value = !section4Open.value
  if (section4Open.value) bump(5)
}
const section5Open = ref(true)
const section5Rows = computed(() => visible.value
  .filter((item, idx) => idx % 7 === 0 || item.status === 'error')
  .map(item => ({ ...item, score: item.value * 5 + 5, flagged: item.value > 49 })))
const section5Total = computed(() => section5Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection5 () {
  section5Open.value = !section5Open.value
  if (section5Open.value) bump(6)
}
const section6Open = ref(false)
const section6Rows = computed(() => visible.value
  .filter((item, idx) => idx % 8 === 0 || item.status === 'warn')
  .map(item => ({ ...item, score: item.value * 6 + 6, flagged: item.value > 60 })))
const section6Total = computed(() => section6Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection6 () {
  section6Open.value = !section6Open.value
  if (section6Open.value) bump(7)
}
const section7Open = ref(false)
const section7Rows = computed(() => visible.value
  .filter((item, idx) => idx % 9 === 0 || item.status === 'error')
  .map(item => ({ ...item, score: item.value * 4 + 7, flagged: item.value > 20 })))
const section7Total = computed(() => section7Rows.value.reduce((sum, row) => sum + row.score, 0))
function toggleSection7 () {
  section7Open.value = !section7Open.value
  if (section7Open.value) bump(8)
}
</script>

<template>
  <section :class="['dashboard-w132', `is-${variant}`, { dense }]" :data-path="route.path">
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
      <summary>{{ title }} / Overview ({{ section0Rows.length }}, {{ section0Total.toFixed(1) }})</summary>
      <dl v-for="row in section0Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section0Rows.length" class="empty">No rows in section 0</p>
      <label class="note">Note <input v-model="notes[0]" :name="`dashboard-note-0`" maxlength="92"></label>
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
      <label class="note">Note <input v-model="notes[1]" :name="`dashboard-note-1`" maxlength="128"></label>
      <button v-if="notes[1]" type="button" class="clear" @click="notes[1] = ''">Clear</button>
    </details>
      <details :open="section2Open" class="sec sec-2" @toggle="toggleSection2">
      <summary>{{ title }} / Limits ({{ section2Rows.length }}, {{ section2Total.toFixed(1) }})</summary>
      <dl v-for="row in section2Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(2) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section2Rows.length" class="empty">No rows in section 2</p>
      <label class="note">Note <input v-model="notes[2]" :name="`dashboard-note-2`" maxlength="77"></label>
      <button v-if="notes[2]" type="button" class="clear" @click="notes[2] = ''">Clear</button>
    </details>
      <details :open="section3Open" class="sec sec-3" @toggle="toggleSection3">
      <summary>{{ title }} / Notes ({{ section3Rows.length }}, {{ section3Total.toFixed(1) }})</summary>
      <dl v-for="row in section3Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section3Rows.length" class="empty">No rows in section 3</p>
      <label class="note">Note <input v-model="notes[3]" :name="`dashboard-note-3`" maxlength="59"></label>
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
      <label class="note">Note <input v-model="notes[4]" :name="`dashboard-note-4`" maxlength="183"></label>
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
      <label class="note">Note <input v-model="notes[5]" :name="`dashboard-note-5`" maxlength="114"></label>
      <button v-if="notes[5]" type="button" class="clear" @click="notes[5] = ''">Clear</button>
    </details>
      <details :open="section6Open" class="sec sec-6" @toggle="toggleSection6">
      <summary>{{ title }} / History ({{ section6Rows.length }}, {{ section6Total.toFixed(1) }})</summary>
      <dl v-for="row in section6Rows" :key="row.id" :class="['row', row.status, { flagged: row.flagged }]">
        <dt>{{ row.title }}</dt>
        <dd class="score">{{ row.score.toFixed(0) }}</dd>
        <dd v-if="row.updatedAt" class="when">{{ row.updatedAt }}</dd>
        <dd v-for="(value, key) in row.meta ?? {}" :key="key" class="meta"><b>{{ key }}</b> {{ value }}</dd>
        <dd v-if="row.tags?.length" class="tags"><span v-for="tag in row.tags" :key="tag">#{{ tag }}</span></dd>
      </dl>
      <p v-if="!section6Rows.length" class="empty">No rows in section 6</p>
      <label class="note">Note <input v-model="notes[6]" :name="`dashboard-note-6`" maxlength="184"></label>
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
      <label class="note">Note <input v-model="notes[7]" :name="`dashboard-note-7`" maxlength="110"></label>
      <button v-if="notes[7]" type="button" class="clear" @click="notes[7] = ''">Clear</button>
    </details>
    <footer class="foot">
      <span>{{ summary }}</span><span>{{ count }}</span>
      <UiButton title="UiButton" :items="[]" />
      <CorePanel36 title="CorePanel36" :items="[]" />
    </footer>
  </section>
</template>

<style scoped>
.dashboard-w132 { display: grid; gap: 2px; padding: 11px; border: 1px solid #791642; }
.dashboard-w132.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: 14px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.foot { display: flex; gap: 12px; opacity: .7; }
.note input { width: 20ch; } .clear { margin-left: 4px; } .empty { color: #888; }
.sec-0 { margin-top: 11px; border-top: 2px dotted #847236; }
.sec-0 summary { font-weight: 400; cursor: pointer; }
.sec-0 .row { display: grid; grid-template-columns: 183px 1fr auto; gap: 3px; }
.sec-0 .row.flagged dt { text-decoration: underline; color: #682041; }
.sec-1 { margin-top: 12px; border-top: 3px dotted #124024; }
.sec-1 summary { font-weight: 700; cursor: pointer; }
.sec-1 .row { display: grid; grid-template-columns: 147px 1fr auto; gap: 9px; }
.sec-1 .row.flagged dt { text-decoration: underline; color: #759659; }
.sec-2 { margin-top: 4px; border-top: 2px solid #150383; }
.sec-2 summary { font-weight: 500; cursor: pointer; }
.sec-2 .row { display: grid; grid-template-columns: 100px 1fr auto; gap: 7px; }
.sec-2 .row.flagged dt { text-decoration: underline; color: #471058; }
.sec-3 { margin-top: 2px; border-top: 2px dotted #839275; }
.sec-3 summary { font-weight: 600; cursor: pointer; }
.sec-3 .row { display: grid; grid-template-columns: 87px 1fr auto; gap: 5px; }
.sec-3 .row.flagged dt { text-decoration: underline; color: #210597; }
.sec-4 { margin-top: 2px; border-top: 2px dotted #837585; }
.sec-4 summary { font-weight: 500; cursor: pointer; }
.sec-4 .row { display: grid; grid-template-columns: 167px 1fr auto; gap: 5px; }
.sec-4 .row.flagged dt { text-decoration: underline; color: #903981; }
.sec-5 { margin-top: 5px; border-top: 2px solid #720689; }
.sec-5 summary { font-weight: 400; cursor: pointer; }
.sec-5 .row { display: grid; grid-template-columns: 132px 1fr auto; gap: 2px; }
.sec-5 .row.flagged dt { text-decoration: underline; color: #170620; }
.sec-6 { margin-top: 10px; border-top: 3px solid #990681; }
.sec-6 summary { font-weight: 600; cursor: pointer; }
.sec-6 .row { display: grid; grid-template-columns: 168px 1fr auto; gap: 2px; }
.sec-6 .row.flagged dt { text-decoration: underline; color: #796431; }
.sec-7 { margin-top: 7px; border-top: 3px dashed #495814; }
.sec-7 summary { font-weight: 700; cursor: pointer; }
.sec-7 .row { display: grid; grid-template-columns: 81px 1fr auto; gap: 9px; }
.sec-7 .row.flagged dt { text-decoration: underline; color: #123472; }
</style>
