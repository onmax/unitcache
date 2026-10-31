<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState2()
useHead({ title: `Dashboard 5 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p5">
    <h1>Dashboard page 5 ({{ count }})</h1>
    <DashboardWidget82 title="DashboardWidget82" />
    <DashboardWidget90 title="DashboardWidget90" />
    <DashboardWidget41 title="DashboardWidget41" />
    <DashboardWidget26 title="DashboardWidget26" />
    <DashboardWidget47 title="DashboardWidget47" />
    <DashboardWidget88 title="DashboardWidget88" />
  </div>
</template>
