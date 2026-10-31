<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState8()
useHead({ title: `Dashboard 0 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p0">
    <h1>Dashboard page 0 ({{ count }})</h1>
    <DashboardWidget207 title="DashboardWidget207" />
    <DashboardWidget193 title="DashboardWidget193" />
    <DashboardWidget100 title="DashboardWidget100" />
  </div>
</template>
