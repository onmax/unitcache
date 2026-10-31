<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState2()
useHead({ title: `Reports 12 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p12">
    <h1>Reports page 12 ({{ count }})</h1>
    <ReportsWidget32 title="ReportsWidget32" />
    <ReportsWidget105 title="ReportsWidget105" />
    <ReportsWidget192 title="ReportsWidget192" />
    <ReportsWidget124 title="ReportsWidget124" />
  </div>
</template>
