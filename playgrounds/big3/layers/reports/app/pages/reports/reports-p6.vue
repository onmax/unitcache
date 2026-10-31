<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState2()
useHead({ title: `Reports 6 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p6">
    <h1>Reports page 6 ({{ count }})</h1>
    <ReportsWidget133 title="ReportsWidget133" />
    <ReportsWidget149 title="ReportsWidget149" />
    <ReportsWidget224 title="ReportsWidget224" />
    <ReportsWidget73 title="ReportsWidget73" />
    <ReportsWidget54 title="ReportsWidget54" />
    <ReportsWidget2 title="ReportsWidget2" />
  </div>
</template>
