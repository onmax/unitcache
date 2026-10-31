<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState14()
useHead({ title: `Reports 5 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p5">
    <h1>Reports page 5 ({{ count }})</h1>
    <ReportsWidget211 title="ReportsWidget211" />
    <ReportsWidget238 title="ReportsWidget238" />
    <ReportsWidget15 title="ReportsWidget15" />
    <ReportsWidget248 title="ReportsWidget248" />
    <ReportsWidget81 title="ReportsWidget81" />
  </div>
</template>
