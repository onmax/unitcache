<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState13()
useHead({ title: `Dashboard 2 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p2">
    <h1>Dashboard page 2 ({{ count }})</h1>
    <DashboardWidget43 title="DashboardWidget43" />
    <DashboardWidget74 title="DashboardWidget74" />
    <DashboardWidget227 title="DashboardWidget227" />
  </div>
</template>
