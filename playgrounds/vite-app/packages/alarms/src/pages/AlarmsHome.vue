<script setup lang="ts">
import '../styles/alarms-theme.css'
import { alarmsCatalog } from '../utils/alarmsCatalog'
import DashboardWidget0 from '@va/dashboard/components/DashboardWidget0.vue'

const route = useRoute()
const { count } = useAlarmsState17()
onMounted(() => { document.title = `Alarms 0 ${route.params.alarmsId ?? ''}` })

const report = shallowRef<string[]>([])
async function loadReport () {
  const { buildAlarmsReport } = await import('../heavy/alarms-heavy')
  report.value = buildAlarmsReport(75)
}
</script>

<template>
  <div class="page alarms-p0">
    <h1>Alarms page 0 ({{ count }})</h1>
    <p class="catalog">{{ alarmsCatalog.length }} catalog entries</p>
    <button type="button" @click="loadReport">Report</button>
    <pre v-if="report.length">{{ report.join('\n') }}</pre>
    <AlarmsWidget18 title="AlarmsWidget18" />
    <AlarmsWidget129 title="AlarmsWidget129" />
    <AlarmsWidget76 title="AlarmsWidget76" />
    <AlarmsWidget57 title="AlarmsWidget57" />
    <AlarmsWidget125 title="AlarmsWidget125" />
    <DashboardWidget0 title="DashboardWidget0" />
  </div>
</template>

<style scoped>
.alarms-p0 { display: grid; gap: 20px; }
</style>
