<script setup lang="ts">
import type { AuditProps1, AuditItem1 } from '../../types'

const props = withDefaults(defineProps<AuditProps1 & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: 31,
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: AuditItem1], close: [] }>()
const { count, label, bump } = useAuditState26()
const expanded = ref(false)
const query = ref('')
const now = ref(new Date().toISOString())
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => formatAudit2(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: 'h' }))
const remote = ref<unknown>(null)
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: AuditItem1) {
  bump()
  emit('select', item)
}
</script>

<template>
  <section :class="['audit-w235', `is-${variant}`, { dense }]">
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
    <footer class="foot">
      <span>{{ summary }}</span><span>{{ count }}</span><pre v-if="remote">{{ remote }}</pre>
      <AuditWidget182 title="AuditWidget182" :items="[]" />
      <AuditWidget112 title="AuditWidget112" :items="[]" />
      <UiEmpty title="UiEmpty" :items="[]" />
      <UiModal title="UiModal" :items="[]" />
      <UiButton title="UiButton" :items="[]" />
      <CorePanel20 title="CorePanel20" :items="[]" />
      <LazyUiChart v-if="expanded" :points="points" />
      <ClientOnly><span class="clock">{{ now }}</span></ClientOnly>
    </footer>
  </section>
</template>

<style scoped>
.audit-w235 { display: grid; gap: 9px; padding: 23px; border: 1px solid #731795; }
.audit-w235.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: 19px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); }
.foot { display: flex; gap: 12px; opacity: .8; }
</style>
