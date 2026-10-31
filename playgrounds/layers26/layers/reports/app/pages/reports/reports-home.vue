<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState29()
useHead({ title: `Reports 0 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p0">
    <h1>Reports page 0 ({{ count }})</h1>
    <ReportsWidget55 title="ReportsWidget55" />
    <ReportsWidget151 title="ReportsWidget151" />
    <ReportsWidget113 title="ReportsWidget113" />
    <ReportsWidget219 title="ReportsWidget219" />
    <ReportsWidget144 title="ReportsWidget144" />
    <ReportsWidget22 title="ReportsWidget22" />
  </div>
</template>
