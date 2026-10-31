<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState13()
useHead({ title: `Reports 3 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p3">
    <h1>Reports page 3 ({{ count }})</h1>
    <ReportsWidget211 title="ReportsWidget211" />
    <ReportsWidget198 title="ReportsWidget198" />
    <ReportsWidget143 title="ReportsWidget143" />
    <ReportsWidget82 title="ReportsWidget82" />
    <ReportsWidget228 title="ReportsWidget228" />
  </div>
</template>
