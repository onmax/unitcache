<script setup lang="ts">
import '../styles/admin-theme.css'
import { adminCatalog } from '../utils/adminCatalog'

const route = useRoute()
const { count } = useAdminState16()
onMounted(() => { document.title = `Admin 0 ${route.params.adminId ?? ''}` })

const report = shallowRef<string[]>([])
async function loadReport () {
  const { buildAdminReport } = await import('../heavy/admin-heavy')
  report.value = buildAdminReport(42)
}
</script>

<template>
  <div class="page admin-p0">
    <h1>Admin page 0 ({{ count }})</h1>
    <p class="catalog">{{ adminCatalog.length }} catalog entries</p>
    <button type="button" @click="loadReport">Report</button>
    <pre v-if="report.length">{{ report.join('\n') }}</pre>
    <AdminWidget23 title="AdminWidget23" />
    <AdminWidget122 title="AdminWidget122" />
    <AdminWidget105 title="AdminWidget105" />
    <AdminWidget79 title="AdminWidget79" />
    <AdminWidget133 title="AdminWidget133" />
  </div>
</template>

<style scoped>
.admin-p0 { display: grid; gap: 17px; }
</style>
