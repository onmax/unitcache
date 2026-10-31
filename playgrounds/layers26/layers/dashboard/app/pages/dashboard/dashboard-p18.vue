<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState22()
useHead({ title: `Dashboard 18 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p18">
    <h1>Dashboard page 18 ({{ count }})</h1>
    <DashboardWidget46 title="DashboardWidget46" />
    <DashboardWidget171 title="DashboardWidget171" />
    <DashboardWidget27 title="DashboardWidget27" />
    <DashboardWidget130 title="DashboardWidget130" />
    <DashboardWidget117 title="DashboardWidget117" />
  </div>
</template>
