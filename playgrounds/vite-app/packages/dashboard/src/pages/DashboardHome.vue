<script setup lang="ts">
import '../styles/dashboard-theme.css'
import { dashboardCatalog } from '../utils/dashboardCatalog'

const route = useRoute()
const { count } = useDashboardState16()
onMounted(() => { document.title = `Dashboard 0 ${route.params.dashboardId ?? ''}` })

const report = shallowRef<string[]>([])
async function loadReport () {
  const { buildDashboardReport } = await import('../heavy/dashboard-heavy')
  report.value = buildDashboardReport(28)
}
</script>

<template>
  <div class="page dashboard-p0">
    <h1>Dashboard page 0 ({{ count }})</h1>
    <p class="catalog">{{ dashboardCatalog.length }} catalog entries</p>
    <button type="button" @click="loadReport">Report</button>
    <pre v-if="report.length">{{ report.join('\n') }}</pre>
    <DashboardWidget113 title="DashboardWidget113" />
    <DashboardWidget46 title="DashboardWidget46" />
    <DashboardWidget69 title="DashboardWidget69" />
  </div>
</template>

<style scoped>
.dashboard-p0 { display: grid; gap: 16px; }
</style>
