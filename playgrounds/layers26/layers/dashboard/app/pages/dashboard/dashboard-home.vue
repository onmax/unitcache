<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState19()
useHead({ title: `Dashboard 0 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p0">
    <h1>Dashboard page 0 ({{ count }})</h1>
    <DashboardWidget249 title="DashboardWidget249" />
    <DashboardWidget194 title="DashboardWidget194" />
    <DashboardWidget179 title="DashboardWidget179" />
  </div>
</template>
