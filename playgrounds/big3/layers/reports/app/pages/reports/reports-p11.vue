<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState21()
useHead({ title: `Reports 11 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p11">
    <h1>Reports page 11 ({{ count }})</h1>
    <ReportsWidget72 title="ReportsWidget72" />
    <ReportsWidget223 title="ReportsWidget223" />
    <ReportsWidget18 title="ReportsWidget18" />
    <ReportsWidget104 title="ReportsWidget104" />
  </div>
</template>
