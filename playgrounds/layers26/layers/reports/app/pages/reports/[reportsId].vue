<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState28()
useHead({ title: `Reports 1 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p1">
    <h1>Reports page 1 ({{ count }})</h1>
    <ReportsWidget138 title="ReportsWidget138" />
    <ReportsWidget92 title="ReportsWidget92" />
    <ReportsWidget156 title="ReportsWidget156" />
    <ReportsWidget0 title="ReportsWidget0" />
  </div>
</template>
