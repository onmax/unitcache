<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState18()
useHead({ title: `Dashboard 16 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p16">
    <h1>Dashboard page 16 ({{ count }})</h1>
    <DashboardWidget209 title="DashboardWidget209" />
    <DashboardWidget187 title="DashboardWidget187" />
    <DashboardWidget107 title="DashboardWidget107" />
    <DashboardWidget184 title="DashboardWidget184" />
    <DashboardWidget67 title="DashboardWidget67" />
    <DashboardWidget127 title="DashboardWidget127" />
  </div>
</template>
