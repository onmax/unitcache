<script setup lang="ts">
import '../styles/kpis-theme.css'
import { kpisCatalog } from '../utils/kpisCatalog'

const route = useRoute()
const { count } = useKpisState19()
onMounted(() => { document.title = `Kpis 0 ${route.params.kpisId ?? ''}` })

const report = shallowRef<string[]>([])
async function loadReport () {
  const { buildKpisReport } = await import('../heavy/kpis-heavy')
  report.value = buildKpisReport(75)
}
</script>

<template>
  <div class="page kpis-p0">
    <h1>Kpis page 0 ({{ count }})</h1>
    <p class="catalog">{{ kpisCatalog.length }} catalog entries</p>
    <button type="button" @click="loadReport">Report</button>
    <pre v-if="report.length">{{ report.join('\n') }}</pre>
    <KpisWidget141 title="KpisWidget141" />
    <KpisWidget8 title="KpisWidget8" />
    <KpisWidget112 title="KpisWidget112" />
    <KpisWidget83 title="KpisWidget83" />
    <KpisWidget85 title="KpisWidget85" />
  </div>
</template>

<style scoped>
.kpis-p0 { display: grid; gap: 13px; }
</style>
