<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState4()
onMounted(() => { document.title = `Reports 8 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p8">
    <h1>Reports page 8 ({{ count }})</h1>
    <ReportsWidget24 title="ReportsWidget24" />
    <ReportsWidget7 title="ReportsWidget7" />
    <ReportsWidget103 title="ReportsWidget103" />
    <ReportsWidget63 title="ReportsWidget63" />
    <ReportsWidget41 title="ReportsWidget41" />
  </div>
</template>

<style scoped>
.reports-p8 { display: grid; gap: 17px; }
</style>
