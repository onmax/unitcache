<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState17()
useHead({ title: `Reports 4 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p4">
    <h1>Reports page 4 ({{ count }})</h1>
    <ReportsWidget225 title="ReportsWidget225" />
    <ReportsWidget120 title="ReportsWidget120" />
    <ReportsWidget237 title="ReportsWidget237" />
    <ReportsWidget224 title="ReportsWidget224" />
    <ReportsWidget170 title="ReportsWidget170" />
  </div>
</template>
