<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState17()
useHead({ title: `Dashboard 12 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p12">
    <h1>Dashboard page 12 ({{ count }})</h1>
    <DashboardWidget17 title="DashboardWidget17" />
    <DashboardWidget15 title="DashboardWidget15" />
    <DashboardWidget67 title="DashboardWidget67" />
    <DashboardWidget34 title="DashboardWidget34" />
  </div>
</template>
