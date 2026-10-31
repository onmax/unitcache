<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState11()
useHead({ title: `Dashboard 10 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p10">
    <h1>Dashboard page 10 ({{ count }})</h1>
    <DashboardWidget108 title="DashboardWidget108" />
    <DashboardWidget175 title="DashboardWidget175" />
    <DashboardWidget26 title="DashboardWidget26" />
    <DashboardWidget221 title="DashboardWidget221" />
    <DashboardWidget140 title="DashboardWidget140" />
    <DashboardWidget104 title="DashboardWidget104" />
  </div>
</template>
