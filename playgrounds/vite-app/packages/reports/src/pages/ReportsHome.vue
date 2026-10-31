<script setup lang="ts">
import '../styles/reports-theme.css'
import { reportsCatalog } from '../utils/reportsCatalog'

const route = useRoute()
const { count } = useReportsState9()
onMounted(() => { document.title = `Reports 0 ${route.params.reportsId ?? ''}` })

const report = shallowRef<string[]>([])
async function loadReport () {
  const { buildReportsReport } = await import('../heavy/reports-heavy')
  report.value = buildReportsReport(45)
}
</script>

<template>
  <div class="page reports-p0">
    <h1>Reports page 0 ({{ count }})</h1>
    <p class="catalog">{{ reportsCatalog.length }} catalog entries</p>
    <button type="button" @click="loadReport">Report</button>
    <pre v-if="report.length">{{ report.join('\n') }}</pre>
    <ReportsWidget64 title="ReportsWidget64" />
    <ReportsWidget107 title="ReportsWidget107" />
    <ReportsWidget85 title="ReportsWidget85" />
  </div>
</template>

<style scoped>
.reports-p0 { display: grid; gap: 8px; }
</style>
