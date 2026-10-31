<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState22()
useHead({ title: `Reports 0 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p0">
    <h1>Reports page 0 ({{ count }})</h1>
    <ReportsWidget46 title="ReportsWidget46" />
    <ReportsWidget113 title="ReportsWidget113" />
    <ReportsWidget231 title="ReportsWidget231" />
    <ReportsWidget50 title="ReportsWidget50" />
    <ReportsWidget131 title="ReportsWidget131" />
    <ReportsWidget93 title="ReportsWidget93" />
  </div>
</template>
