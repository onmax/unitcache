<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState23()
useHead({ title: `Dashboard 19 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p19">
    <h1>Dashboard page 19 ({{ count }})</h1>
    <DashboardWidget158 title="DashboardWidget158" />
    <DashboardWidget33 title="DashboardWidget33" />
    <DashboardWidget115 title="DashboardWidget115" />
    <DashboardWidget6 title="DashboardWidget6" />
  </div>
</template>
