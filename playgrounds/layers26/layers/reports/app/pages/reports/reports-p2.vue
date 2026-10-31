<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState10()
useHead({ title: `Reports 2 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p2">
    <h1>Reports page 2 ({{ count }})</h1>
    <ReportsWidget40 title="ReportsWidget40" />
    <ReportsWidget162 title="ReportsWidget162" />
    <ReportsWidget201 title="ReportsWidget201" />
  </div>
</template>
