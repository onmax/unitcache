<script setup lang="ts">
import type { Area24Props1, Area24Item1 } from '../../types'

const props = withDefaults(defineProps<Area24Props1 & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: 22,
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: Area24Item1], close: [] }>()
const { count, label, bump } = useArea24State10()
const expanded = ref(false)
const query = ref('')
const now = ref(new Date().toISOString())
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => formatArea245(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: '€' }))
const { data: remote } = await useFetch('/api/area24/area24-r22', { query: { id: props.title } })
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: Area24Item1) {
  bump()
  emit('select', item)
}
</script>

<template>
  <section :class="['area24-w109', `is-${variant}`, { dense }]">
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
      <UiModal title="UiModal" :items="[]" />
      <UiTabs title="UiTabs" :items="[]" />
      <UiBadge title="UiBadge" :items="[]" />
      <CorePanel62 title="CorePanel62" :items="[]" />
    </footer>
  </section>
</template>

<style scoped>
.area24-w109 { display: grid; gap: 3px; padding: 10px; border: 1px solid #530564; }
.area24-w109.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: 16px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.foot { display: flex; gap: 12px; opacity: .8; }
</style>
