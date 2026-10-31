<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState6()
useHead({ title: `Reports 9 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p9">
    <h1>Reports page 9 ({{ count }})</h1>
    <ReportsWidget175 title="ReportsWidget175" />
    <ReportsWidget96 title="ReportsWidget96" />
    <ReportsWidget8 title="ReportsWidget8" />
    <ReportsWidget242 title="ReportsWidget242" />
  </div>
</template>
