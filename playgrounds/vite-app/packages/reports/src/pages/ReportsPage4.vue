<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState10()
onMounted(() => { document.title = `Reports 4 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p4">
    <h1>Reports page 4 ({{ count }})</h1>
    <ReportsWidget22 title="ReportsWidget22" />
    <ReportsWidget87 title="ReportsWidget87" />
    <ReportsWidget12 title="ReportsWidget12" />
  </div>
</template>

<style scoped>
.reports-p4 { display: grid; gap: 8px; }
</style>
