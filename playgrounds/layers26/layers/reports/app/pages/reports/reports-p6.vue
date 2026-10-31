<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState0()
useHead({ title: `Reports 6 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p6">
    <h1>Reports page 6 ({{ count }})</h1>
    <ReportsWidget104 title="ReportsWidget104" />
    <ReportsWidget204 title="ReportsWidget204" />
    <ReportsWidget142 title="ReportsWidget142" />
    <ReportsWidget171 title="ReportsWidget171" />
    <ReportsWidget81 title="ReportsWidget81" />
    <ReportsWidget56 title="ReportsWidget56" />
  </div>
</template>
