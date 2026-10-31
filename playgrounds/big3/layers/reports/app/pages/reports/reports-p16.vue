<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState24()
useHead({ title: `Reports 16 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p16">
    <h1>Reports page 16 ({{ count }})</h1>
    <ReportsWidget232 title="ReportsWidget232" />
    <ReportsWidget119 title="ReportsWidget119" />
    <ReportsWidget207 title="ReportsWidget207" />
    <ReportsWidget219 title="ReportsWidget219" />
  </div>
</template>
