<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState0()
onMounted(() => { document.title = `Reports 1 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p1">
    <h1>Reports page 1 ({{ count }})</h1>
    <ReportsWidget61 title="ReportsWidget61" />
    <ReportsWidget126 title="ReportsWidget126" />
    <ReportsWidget98 title="ReportsWidget98" />
  </div>
</template>

<style scoped>
.reports-p1 { display: grid; gap: 21px; }
</style>
