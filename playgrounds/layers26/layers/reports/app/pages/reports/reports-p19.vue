<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState26()
useHead({ title: `Reports 19 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p19">
    <h1>Reports page 19 ({{ count }})</h1>
    <ReportsWidget16 title="ReportsWidget16" />
    <ReportsWidget69 title="ReportsWidget69" />
    <ReportsWidget41 title="ReportsWidget41" />
    <ReportsWidget177 title="ReportsWidget177" />
  </div>
</template>
