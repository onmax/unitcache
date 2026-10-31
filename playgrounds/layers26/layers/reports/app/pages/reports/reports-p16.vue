<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState9()
useHead({ title: `Reports 16 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p16">
    <h1>Reports page 16 ({{ count }})</h1>
    <ReportsWidget207 title="ReportsWidget207" />
    <ReportsWidget185 title="ReportsWidget185" />
    <ReportsWidget112 title="ReportsWidget112" />
  </div>
</template>
