<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState8()
onMounted(() => { document.title = `Reports 2 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p2">
    <h1>Reports page 2 ({{ count }})</h1>
    <ReportsWidget11 title="ReportsWidget11" />
    <ReportsWidget40 title="ReportsWidget40" />
    <ReportsWidget47 title="ReportsWidget47" />
    <ReportsWidget24 title="ReportsWidget24" />
    <ReportsWidget2 title="ReportsWidget2" />
  </div>
</template>

<style scoped>
.reports-p2 { display: grid; gap: 22px; }
</style>
