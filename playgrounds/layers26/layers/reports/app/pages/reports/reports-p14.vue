<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState7()
useHead({ title: `Reports 14 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p14">
    <h1>Reports page 14 ({{ count }})</h1>
    <ReportsWidget231 title="ReportsWidget231" />
    <ReportsWidget100 title="ReportsWidget100" />
    <ReportsWidget75 title="ReportsWidget75" />
    <ReportsWidget202 title="ReportsWidget202" />
    <ReportsWidget6 title="ReportsWidget6" />
  </div>
</template>
