<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState12()
useHead({ title: `Reports 9 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p9">
    <h1>Reports page 9 ({{ count }})</h1>
    <ReportsWidget249 title="ReportsWidget249" />
    <ReportsWidget146 title="ReportsWidget146" />
    <ReportsWidget103 title="ReportsWidget103" />
    <ReportsWidget169 title="ReportsWidget169" />
  </div>
</template>
