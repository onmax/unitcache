<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState10()
useHead({ title: `Reports 13 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p13">
    <h1>Reports page 13 ({{ count }})</h1>
    <ReportsWidget177 title="ReportsWidget177" />
    <ReportsWidget41 title="ReportsWidget41" />
    <ReportsWidget60 title="ReportsWidget60" />
  </div>
</template>
