<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState19()
useHead({ title: `Reports 8 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p8">
    <h1>Reports page 8 ({{ count }})</h1>
    <ReportsWidget59 title="ReportsWidget59" />
    <ReportsWidget195 title="ReportsWidget195" />
    <ReportsWidget50 title="ReportsWidget50" />
  </div>
</template>
