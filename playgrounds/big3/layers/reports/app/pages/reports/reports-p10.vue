<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState10()
useHead({ title: `Reports 10 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p10">
    <h1>Reports page 10 ({{ count }})</h1>
    <ReportsWidget192 title="ReportsWidget192" />
    <ReportsWidget71 title="ReportsWidget71" />
    <ReportsWidget210 title="ReportsWidget210" />
    <ReportsWidget145 title="ReportsWidget145" />
    <ReportsWidget189 title="ReportsWidget189" />
    <ReportsWidget1 title="ReportsWidget1" />
  </div>
</template>
