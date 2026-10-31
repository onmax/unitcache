<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState0()
useHead({ title: `Dashboard 11 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p11">
    <h1>Dashboard page 11 ({{ count }})</h1>
    <DashboardWidget104 title="DashboardWidget104" />
    <DashboardWidget197 title="DashboardWidget197" />
    <DashboardWidget56 title="DashboardWidget56" />
    <DashboardWidget235 title="DashboardWidget235" />
  </div>
</template>
