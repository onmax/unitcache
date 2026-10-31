<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState16()
useHead({ title: `Reports 3 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p3">
    <h1>Reports page 3 ({{ count }})</h1>
    <ReportsWidget130 title="ReportsWidget130" />
    <ReportsWidget160 title="ReportsWidget160" />
    <ReportsWidget42 title="ReportsWidget42" />
    <ReportsWidget12 title="ReportsWidget12" />
  </div>
</template>
