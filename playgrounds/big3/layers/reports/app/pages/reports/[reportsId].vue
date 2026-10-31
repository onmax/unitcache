<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState20()
useHead({ title: `Reports 1 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p1">
    <h1>Reports page 1 ({{ count }})</h1>
    <ReportsWidget207 title="ReportsWidget207" />
    <ReportsWidget193 title="ReportsWidget193" />
    <ReportsWidget201 title="ReportsWidget201" />
    <ReportsWidget235 title="ReportsWidget235" />
  </div>
</template>
