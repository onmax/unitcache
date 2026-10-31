<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState25()
useHead({ title: `Reports 14 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p14">
    <h1>Reports page 14 ({{ count }})</h1>
    <ReportsWidget67 title="ReportsWidget67" />
    <ReportsWidget206 title="ReportsWidget206" />
    <ReportsWidget117 title="ReportsWidget117" />
    <ReportsWidget142 title="ReportsWidget142" />
    <ReportsWidget244 title="ReportsWidget244" />
    <ReportsWidget248 title="ReportsWidget248" />
  </div>
</template>
