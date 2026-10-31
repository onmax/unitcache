<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState12()
useHead({ title: `Dashboard 2 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p2">
    <h1>Dashboard page 2 ({{ count }})</h1>
    <DashboardWidget89 title="DashboardWidget89" />
    <DashboardWidget209 title="DashboardWidget209" />
    <DashboardWidget194 title="DashboardWidget194" />
    <DashboardWidget181 title="DashboardWidget181" />
    <DashboardWidget143 title="DashboardWidget143" />
  </div>
</template>
