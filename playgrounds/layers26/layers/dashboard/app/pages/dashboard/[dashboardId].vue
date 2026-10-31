<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState23()
useHead({ title: `Dashboard 1 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p1">
    <h1>Dashboard page 1 ({{ count }})</h1>
    <DashboardWidget109 title="DashboardWidget109" />
    <DashboardWidget145 title="DashboardWidget145" />
    <DashboardWidget7 title="DashboardWidget7" />
    <DashboardWidget44 title="DashboardWidget44" />
    <DashboardWidget218 title="DashboardWidget218" />
    <DashboardWidget238 title="DashboardWidget238" />
  </div>
</template>
