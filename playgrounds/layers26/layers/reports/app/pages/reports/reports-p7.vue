<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState27()
useHead({ title: `Reports 7 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p7">
    <h1>Reports page 7 ({{ count }})</h1>
    <ReportsWidget108 title="ReportsWidget108" />
    <ReportsWidget81 title="ReportsWidget81" />
    <ReportsWidget195 title="ReportsWidget195" />
    <ReportsWidget30 title="ReportsWidget30" />
    <ReportsWidget128 title="ReportsWidget128" />
  </div>
</template>
