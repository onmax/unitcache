<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState11()
useHead({ title: `Reports 12 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p12">
    <h1>Reports page 12 ({{ count }})</h1>
    <ReportsWidget38 title="ReportsWidget38" />
    <ReportsWidget168 title="ReportsWidget168" />
    <ReportsWidget54 title="ReportsWidget54" />
    <ReportsWidget236 title="ReportsWidget236" />
    <ReportsWidget58 title="ReportsWidget58" />
  </div>
</template>
