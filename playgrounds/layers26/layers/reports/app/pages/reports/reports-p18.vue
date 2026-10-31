<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState9()
useHead({ title: `Reports 18 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p18">
    <h1>Reports page 18 ({{ count }})</h1>
    <ReportsWidget47 title="ReportsWidget47" />
    <ReportsWidget196 title="ReportsWidget196" />
    <ReportsWidget123 title="ReportsWidget123" />
    <ReportsWidget214 title="ReportsWidget214" />
    <ReportsWidget23 title="ReportsWidget23" />
  </div>
</template>
