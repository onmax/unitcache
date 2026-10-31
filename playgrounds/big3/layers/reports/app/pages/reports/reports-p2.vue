<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState14()
useHead({ title: `Reports 2 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p2">
    <h1>Reports page 2 ({{ count }})</h1>
    <ReportsWidget203 title="ReportsWidget203" />
    <ReportsWidget234 title="ReportsWidget234" />
    <ReportsWidget118 title="ReportsWidget118" />
  </div>
</template>
