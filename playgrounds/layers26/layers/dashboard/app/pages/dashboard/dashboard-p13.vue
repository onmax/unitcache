<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState26()
useHead({ title: `Dashboard 13 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p13">
    <h1>Dashboard page 13 ({{ count }})</h1>
    <DashboardWidget160 title="DashboardWidget160" />
    <DashboardWidget248 title="DashboardWidget248" />
    <DashboardWidget75 title="DashboardWidget75" />
    <DashboardWidget41 title="DashboardWidget41" />
    <DashboardWidget219 title="DashboardWidget219" />
    <DashboardWidget7 title="DashboardWidget7" />
  </div>
</template>
