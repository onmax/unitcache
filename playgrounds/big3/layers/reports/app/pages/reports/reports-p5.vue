<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState0()
useHead({ title: `Reports 5 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p5">
    <h1>Reports page 5 ({{ count }})</h1>
    <ReportsWidget122 title="ReportsWidget122" />
    <ReportsWidget237 title="ReportsWidget237" />
    <ReportsWidget214 title="ReportsWidget214" />
    <ReportsWidget38 title="ReportsWidget38" />
    <ReportsWidget101 title="ReportsWidget101" />
  </div>
</template>
