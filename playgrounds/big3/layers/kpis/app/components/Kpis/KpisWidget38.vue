<script setup lang="ts">
import type { KpisProps2, KpisItem2 } from '../../types'

const props = withDefaults(defineProps<KpisProps2 & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: 41,
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: KpisItem2], close: [] }>()
const { count, label, bump } = useKpisState6()
const expanded = ref(false)
const query = ref('')
const now = ref(new Date().toISOString())
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => formatKpis9(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: 'h' }))
const remote = ref<unknown>(null)
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: KpisItem2) {
  bump()
  emit('select', item)
}
</script>

<template>
  <section :class="['kpis-w38', `is-${variant}`, { dense }]">
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
      <KpisWidget11 title="KpisWidget11" :items="[]" />
      <UiBadge title="UiBadge" :items="[]" />
      <UiTabs title="UiTabs" :items="[]" />
      <UiButton title="UiButton" :items="[]" />
      <CorePanel58 title="CorePanel58" :items="[]" />
    </footer>
  </section>
</template>

<style scoped>
.kpis-w38 { display: grid; gap: 4px; padding: 8px; border: 1px solid #769896; }
.kpis-w38.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: 12px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); }
.foot { display: flex; gap: 12px; opacity: .9; }
</style>
