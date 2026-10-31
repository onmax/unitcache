<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState14()
useHead({ title: `Dashboard 1 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p1">
    <h1>Dashboard page 1 ({{ count }})</h1>
    <DashboardWidget52 title="DashboardWidget52" />
    <DashboardWidget203 title="DashboardWidget203" />
    <DashboardWidget169 title="DashboardWidget169" />
    <DashboardWidget35 title="DashboardWidget35" />
    <DashboardWidget59 title="DashboardWidget59" />
    <DashboardWidget180 title="DashboardWidget180" />
  </div>
</template>
