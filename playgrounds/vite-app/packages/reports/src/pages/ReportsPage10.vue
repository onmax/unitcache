<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState15()
onMounted(() => { document.title = `Reports 10 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p10">
    <h1>Reports page 10 ({{ count }})</h1>
    <ReportsWidget49 title="ReportsWidget49" />
    <ReportsWidget133 title="ReportsWidget133" />
    <ReportsWidget56 title="ReportsWidget56" />
    <ReportsWidget7 title="ReportsWidget7" />
    <ReportsWidget28 title="ReportsWidget28" />
    <ReportsWidget81 title="ReportsWidget81" />
  </div>
</template>

<style scoped>
.reports-p10 { display: grid; gap: 8px; }
</style>
