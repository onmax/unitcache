<script setup lang="ts">

const route = useRoute()
const { count } = useReportsState8()
onMounted(() => { document.title = `Reports 11 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p11">
    <h1>Reports page 11 ({{ count }})</h1>
    <ReportsWidget93 title="ReportsWidget93" />
    <ReportsWidget30 title="ReportsWidget30" />
    <ReportsWidget151 title="ReportsWidget151" />
  </div>
</template>

<style scoped>
.reports-p11 { display: grid; gap: 17px; }
</style>
