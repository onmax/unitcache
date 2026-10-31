<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState1()
useHead({ title: `Dashboard 7 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p7">
    <h1>Dashboard page 7 ({{ count }})</h1>
    <DashboardWidget221 title="DashboardWidget221" />
    <DashboardWidget209 title="DashboardWidget209" />
    <DashboardWidget21 title="DashboardWidget21" />
    <DashboardWidget168 title="DashboardWidget168" />
    <DashboardWidget136 title="DashboardWidget136" />
    <DashboardWidget175 title="DashboardWidget175" />
  </div>
</template>
