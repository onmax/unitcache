<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState28()
useHead({ title: `Reports 4 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p4">
    <h1>Reports page 4 ({{ count }})</h1>
    <ReportsWidget130 title="ReportsWidget130" />
    <ReportsWidget20 title="ReportsWidget20" />
    <ReportsWidget3 title="ReportsWidget3" />
    <ReportsWidget87 title="ReportsWidget87" />
    <ReportsWidget127 title="ReportsWidget127" />
  </div>
</template>
