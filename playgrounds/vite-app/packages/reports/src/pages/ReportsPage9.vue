<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState5()
onMounted(() => { document.title = `Reports 9 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p9">
    <h1>Reports page 9 ({{ count }})</h1>
    <ReportsWidget120 title="ReportsWidget120" />
    <ReportsWidget22 title="ReportsWidget22" />
    <ReportsWidget60 title="ReportsWidget60" />
    <ReportsWidget17 title="ReportsWidget17" />
    <ReportsWidget140 title="ReportsWidget140" />
  </div>
</template>

<style scoped>
.reports-p9 { display: grid; gap: 19px; }
</style>
