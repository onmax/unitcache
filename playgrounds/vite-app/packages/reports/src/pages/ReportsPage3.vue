<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState14()
onMounted(() => { document.title = `Reports 3 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p3">
    <h1>Reports page 3 ({{ count }})</h1>
    <ReportsWidget114 title="ReportsWidget114" />
    <ReportsWidget30 title="ReportsWidget30" />
    <ReportsWidget125 title="ReportsWidget125" />
    <ReportsWidget82 title="ReportsWidget82" />
    <ReportsWidget129 title="ReportsWidget129" />
    <ReportsWidget66 title="ReportsWidget66" />
  </div>
</template>

<style scoped>
.reports-p3 { display: grid; gap: 20px; }
</style>
