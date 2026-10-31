<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState18()
useHead({ title: `Dashboard 3 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p3">
    <h1>Dashboard page 3 ({{ count }})</h1>
    <DashboardWidget139 title="DashboardWidget139" />
    <DashboardWidget6 title="DashboardWidget6" />
    <DashboardWidget112 title="DashboardWidget112" />
    <DashboardWidget31 title="DashboardWidget31" />
    <DashboardWidget94 title="DashboardWidget94" />
    <DashboardWidget229 title="DashboardWidget229" />
  </div>
</template>
