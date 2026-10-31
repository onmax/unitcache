<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState6()
useHead({ title: `Dashboard 18 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p18">
    <h1>Dashboard page 18 ({{ count }})</h1>
    <DashboardWidget123 title="DashboardWidget123" />
    <DashboardWidget25 title="DashboardWidget25" />
    <DashboardWidget208 title="DashboardWidget208" />
    <DashboardWidget152 title="DashboardWidget152" />
    <DashboardWidget108 title="DashboardWidget108" />
    <DashboardWidget159 title="DashboardWidget159" />
  </div>
</template>
