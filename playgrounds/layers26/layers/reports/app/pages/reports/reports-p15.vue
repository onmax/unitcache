<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState23()
useHead({ title: `Reports 15 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p15">
    <h1>Reports page 15 ({{ count }})</h1>
    <ReportsWidget22 title="ReportsWidget22" />
    <ReportsWidget202 title="ReportsWidget202" />
    <ReportsWidget75 title="ReportsWidget75" />
    <ReportsWidget135 title="ReportsWidget135" />
    <ReportsWidget81 title="ReportsWidget81" />
    <ReportsWidget168 title="ReportsWidget168" />
  </div>
</template>
