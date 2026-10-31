<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState6()
useHead({ title: `Reports 13 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p13">
    <h1>Reports page 13 ({{ count }})</h1>
    <ReportsWidget5 title="ReportsWidget5" />
    <ReportsWidget16 title="ReportsWidget16" />
    <ReportsWidget129 title="ReportsWidget129" />
  </div>
</template>
