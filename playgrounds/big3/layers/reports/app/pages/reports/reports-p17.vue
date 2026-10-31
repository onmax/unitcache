<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState27()
useHead({ title: `Reports 17 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p17">
    <h1>Reports page 17 ({{ count }})</h1>
    <ReportsWidget167 title="ReportsWidget167" />
    <ReportsWidget245 title="ReportsWidget245" />
    <ReportsWidget179 title="ReportsWidget179" />
  </div>
</template>
