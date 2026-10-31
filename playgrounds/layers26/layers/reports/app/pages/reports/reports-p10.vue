<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState13()
useHead({ title: `Reports 10 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p10">
    <h1>Reports page 10 ({{ count }})</h1>
    <ReportsWidget202 title="ReportsWidget202" />
    <ReportsWidget107 title="ReportsWidget107" />
    <ReportsWidget210 title="ReportsWidget210" />
  </div>
</template>
