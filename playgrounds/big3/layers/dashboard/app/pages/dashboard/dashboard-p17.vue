<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState15()
useHead({ title: `Dashboard 17 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p17">
    <h1>Dashboard page 17 ({{ count }})</h1>
    <DashboardWidget35 title="DashboardWidget35" />
    <DashboardWidget102 title="DashboardWidget102" />
    <DashboardWidget63 title="DashboardWidget63" />
  </div>
</template>
