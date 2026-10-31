<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState19()
useHead({ title: `Reports 8 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p8">
    <h1>Reports page 8 ({{ count }})</h1>
    <ReportsWidget99 title="ReportsWidget99" />
    <ReportsWidget51 title="ReportsWidget51" />
    <ReportsWidget162 title="ReportsWidget162" />
    <ReportsWidget130 title="ReportsWidget130" />
    <ReportsWidget236 title="ReportsWidget236" />
  </div>
</template>
