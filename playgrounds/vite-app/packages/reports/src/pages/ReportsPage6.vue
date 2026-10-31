<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState3()
onMounted(() => { document.title = `Reports 6 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p6">
    <h1>Reports page 6 ({{ count }})</h1>
    <ReportsWidget137 title="ReportsWidget137" />
    <ReportsWidget46 title="ReportsWidget46" />
    <ReportsWidget94 title="ReportsWidget94" />
    <ReportsWidget169 title="ReportsWidget169" />
    <ReportsWidget159 title="ReportsWidget159" />
    <ReportsWidget17 title="ReportsWidget17" />
  </div>
</template>

<style scoped>
.reports-p6 { display: grid; gap: 20px; }
</style>
