<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState1()
onMounted(() => { document.title = `Reports 5 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p5">
    <h1>Reports page 5 ({{ count }})</h1>
    <ReportsWidget1 title="ReportsWidget1" />
    <ReportsWidget167 title="ReportsWidget167" />
    <ReportsWidget39 title="ReportsWidget39" />
    <ReportsWidget51 title="ReportsWidget51" />
    <ReportsWidget84 title="ReportsWidget84" />
  </div>
</template>

<style scoped>
.reports-p5 { display: grid; gap: 11px; }
</style>
