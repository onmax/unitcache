<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState23()
useHead({ title: `Dashboard 4 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p4">
    <h1>Dashboard page 4 ({{ count }})</h1>
    <DashboardWidget122 title="DashboardWidget122" />
    <DashboardWidget24 title="DashboardWidget24" />
    <DashboardWidget148 title="DashboardWidget148" />
    <DashboardWidget153 title="DashboardWidget153" />
  </div>
</template>
