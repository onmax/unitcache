<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState18()
useHead({ title: `Dashboard 3 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p3">
    <h1>Dashboard page 3 ({{ count }})</h1>
    <DashboardWidget59 title="DashboardWidget59" />
    <DashboardWidget236 title="DashboardWidget236" />
    <DashboardWidget125 title="DashboardWidget125" />
    <DashboardWidget70 title="DashboardWidget70" />
    <DashboardWidget158 title="DashboardWidget158" />
    <DashboardWidget13 title="DashboardWidget13" />
  </div>
</template>
