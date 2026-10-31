<script setup lang="ts">
import type { KpisProps5, KpisItem5 } from '../../types'

const props = withDefaults(defineProps<KpisProps5 & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: 31,
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: KpisItem5], close: [] }>()
const { count, label, bump } = useKpisState27()
const expanded = ref(false)
const query = ref('')
const now = ref(new Date().toISOString())
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => formatKpis3(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: 'kW' }))
const remote = ref<unknown>(null)
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: KpisItem5) {
  bump()
  emit('select', item)
}
</script>

<template>
  <section :class="['kpis-w203', `is-${variant}`, { dense }]">
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
      <KpisWidget143 title="KpisWidget143" :items="[]" />
      <KpisWidget104 title="KpisWidget104" :items="[]" />
      <UiSelect title="UiSelect" :items="[]" />
      <UiButton title="UiButton" :items="[]" />
      <UiCard title="UiCard" :items="[]" />
      <CorePanel20 title="CorePanel20" :items="[]" />
    </footer>
  </section>
</template>

<style scoped>
.kpis-w203 { display: grid; gap: 13px; padding: 14px; border: 1px solid #293948; }
.kpis-w203.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: 20px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.foot { display: flex; gap: 12px; opacity: .7; }
</style>
