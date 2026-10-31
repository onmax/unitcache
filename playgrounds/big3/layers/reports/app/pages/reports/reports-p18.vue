<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState6()
useHead({ title: `Reports 18 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p18">
    <h1>Reports page 18 ({{ count }})</h1>
    <ReportsWidget237 title="ReportsWidget237" />
    <ReportsWidget188 title="ReportsWidget188" />
    <ReportsWidget23 title="ReportsWidget23" />
    <ReportsWidget213 title="ReportsWidget213" />
  </div>
</template>
