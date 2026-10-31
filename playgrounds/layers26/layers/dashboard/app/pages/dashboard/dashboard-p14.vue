<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState1()
useHead({ title: `Dashboard 14 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p14">
    <h1>Dashboard page 14 ({{ count }})</h1>
    <DashboardWidget89 title="DashboardWidget89" />
    <DashboardWidget50 title="DashboardWidget50" />
    <DashboardWidget155 title="DashboardWidget155" />
    <DashboardWidget70 title="DashboardWidget70" />
    <DashboardWidget23 title="DashboardWidget23" />
  </div>
</template>
