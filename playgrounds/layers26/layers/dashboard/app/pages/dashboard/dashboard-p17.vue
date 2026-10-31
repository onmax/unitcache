<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState29()
useHead({ title: `Dashboard 17 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p17">
    <h1>Dashboard page 17 ({{ count }})</h1>
    <DashboardWidget210 title="DashboardWidget210" />
    <DashboardWidget139 title="DashboardWidget139" />
    <DashboardWidget221 title="DashboardWidget221" />
    <DashboardWidget149 title="DashboardWidget149" />
  </div>
</template>
