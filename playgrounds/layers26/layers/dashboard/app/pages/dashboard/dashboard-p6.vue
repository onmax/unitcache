<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState7()
useHead({ title: `Dashboard 6 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p6">
    <h1>Dashboard page 6 ({{ count }})</h1>
    <DashboardWidget53 title="DashboardWidget53" />
    <DashboardWidget44 title="DashboardWidget44" />
    <DashboardWidget7 title="DashboardWidget7" />
    <DashboardWidget116 title="DashboardWidget116" />
    <DashboardWidget39 title="DashboardWidget39" />
  </div>
</template>
