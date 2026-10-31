<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState3()
useHead({ title: `Dashboard 14 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p14">
    <h1>Dashboard page 14 ({{ count }})</h1>
    <DashboardWidget19 title="DashboardWidget19" />
    <DashboardWidget39 title="DashboardWidget39" />
    <DashboardWidget24 title="DashboardWidget24" />
    <DashboardWidget219 title="DashboardWidget219" />
    <DashboardWidget130 title="DashboardWidget130" />
  </div>
</template>
