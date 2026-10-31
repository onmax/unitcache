<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState9()
useHead({ title: `Reports 7 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p7">
    <h1>Reports page 7 ({{ count }})</h1>
    <ReportsWidget146 title="ReportsWidget146" />
    <ReportsWidget96 title="ReportsWidget96" />
    <ReportsWidget224 title="ReportsWidget224" />
    <ReportsWidget10 title="ReportsWidget10" />
    <ReportsWidget117 title="ReportsWidget117" />
  </div>
</template>
