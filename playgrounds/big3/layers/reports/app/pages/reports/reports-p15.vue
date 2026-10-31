<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState20()
useHead({ title: `Reports 15 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p15">
    <h1>Reports page 15 ({{ count }})</h1>
    <ReportsWidget194 title="ReportsWidget194" />
    <ReportsWidget192 title="ReportsWidget192" />
    <ReportsWidget117 title="ReportsWidget117" />
  </div>
</template>
