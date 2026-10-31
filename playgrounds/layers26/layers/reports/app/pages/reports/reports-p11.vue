<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState21()
useHead({ title: `Reports 11 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p11">
    <h1>Reports page 11 ({{ count }})</h1>
    <ReportsWidget104 title="ReportsWidget104" />
    <ReportsWidget146 title="ReportsWidget146" />
    <ReportsWidget142 title="ReportsWidget142" />
  </div>
</template>
