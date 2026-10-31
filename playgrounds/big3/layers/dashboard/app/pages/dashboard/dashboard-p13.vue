<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState21()
useHead({ title: `Dashboard 13 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p13">
    <h1>Dashboard page 13 ({{ count }})</h1>
    <DashboardWidget120 title="DashboardWidget120" />
    <DashboardWidget239 title="DashboardWidget239" />
    <DashboardWidget115 title="DashboardWidget115" />
    <DashboardWidget219 title="DashboardWidget219" />
    <DashboardWidget103 title="DashboardWidget103" />
  </div>
</template>
