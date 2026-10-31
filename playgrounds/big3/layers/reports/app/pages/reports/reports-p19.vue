<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['reports-guard'] })
const route = useRoute()
const { count } = useReportsState10()
useHead({ title: `Reports 19 ${route.params.reportsId ?? ''}` })
</script>

<template>
  <div class="page reports-p19">
    <h1>Reports page 19 ({{ count }})</h1>
    <ReportsWidget114 title="ReportsWidget114" />
    <ReportsWidget86 title="ReportsWidget86" />
    <ReportsWidget217 title="ReportsWidget217" />
  </div>
</template>
