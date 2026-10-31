<script setup lang="ts">
import type { SettingsProps0, SettingsItem0 } from '../../types'

const props = withDefaults(defineProps<SettingsProps0 & { variant?: 'primary' | 'secondary' }>(), {
  items: () => [],
  limit: 8,
  mode: 'list',
  variant: 'primary',
})
const emit = defineEmits<{ select: [item: SettingsItem0], close: [] }>()
const { count, label, bump } = useSettingsState15()
const expanded = ref(false)
const query = ref('')
const now = ref(new Date().toISOString())
const visible = computed(() => props.items
  .filter(item => !query.value || item.title.toLowerCase().includes(query.value.toLowerCase()))
  .slice(0, props.limit))
const points = computed(() => visible.value.map(item => item.value))
const summary = computed(() => formatSettings9(visible.value.reduce((sum, item) => sum + item.value, 0), { unit: '%' }))
const { data: remote } = await useFetch('/api/settings/settings-r2', { query: { id: props.title } })
watch(() => props.highlight, (value) => { if (value) expanded.value = true })
function onSelect (item: SettingsItem0) {
  bump()
  emit('select', item)
}
</script>

<template>
  <section :class="['settings-w102', `is-${variant}`, { dense }]">
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
      <SettingsWidget51 title="SettingsWidget51" :items="[]" />
      <SettingsWidget53 title="SettingsWidget53" :items="[]" />
      <UiTable title="UiTable" :items="[]" />
      <UiEmpty title="UiEmpty" :items="[]" />
      <CorePanel5 title="CorePanel5" :items="[]" />
    </footer>
  </section>
</template>

<style scoped>
.settings-w102 { display: grid; gap: 14px; padding: 8px; border: 1px solid #423803; }
.settings-w102.dense { gap: 2px; padding: 4px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.head h3 { margin: 0; font-size: 13px; }
.list li { display: flex; gap: 8px; cursor: pointer; }
.list li.ok { color: #2a7; } .list li.warn { color: #c80; } .list li.error { color: #d33; }
.tag { border-radius: 4px; padding: 0 4px; background: #eee; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); }
.foot { display: flex; gap: 12px; opacity: .5; }
</style>
