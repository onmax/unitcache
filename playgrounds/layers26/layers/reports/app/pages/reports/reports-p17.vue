<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState9()
useHead({ title: `Reports 17 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p17">
    <h1>Reports page 17 ({{ count }})</h1>
    <ReportsWidget202 title="ReportsWidget202" />
    <ReportsWidget203 title="ReportsWidget203" />
    <ReportsWidget198 title="ReportsWidget198" />
    <ReportsWidget197 title="ReportsWidget197" />
    <ReportsWidget149 title="ReportsWidget149" />
  </div>
</template>
