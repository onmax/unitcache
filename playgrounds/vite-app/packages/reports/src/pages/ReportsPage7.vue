<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState2()
onMounted(() => { document.title = `Reports 7 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p7">
    <h1>Reports page 7 ({{ count }})</h1>
    <ReportsWidget97 title="ReportsWidget97" />
    <ReportsWidget57 title="ReportsWidget57" />
    <ReportsWidget50 title="ReportsWidget50" />
    <ReportsWidget53 title="ReportsWidget53" />
  </div>
</template>

<style scoped>
.reports-p7 { display: grid; gap: 11px; }
</style>
