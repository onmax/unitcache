<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState18()
useHead({ title: `Dashboard 6 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p6">
    <h1>Dashboard page 6 ({{ count }})</h1>
    <DashboardWidget52 title="DashboardWidget52" />
    <DashboardWidget211 title="DashboardWidget211" />
    <DashboardWidget157 title="DashboardWidget157" />
    <DashboardWidget168 title="DashboardWidget168" />
    <DashboardWidget45 title="DashboardWidget45" />
    <DashboardWidget41 title="DashboardWidget41" />
  </div>
</template>
