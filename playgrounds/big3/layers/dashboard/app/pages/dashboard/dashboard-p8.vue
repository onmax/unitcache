<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState13()
useHead({ title: `Dashboard 8 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p8">
    <h1>Dashboard page 8 ({{ count }})</h1>
    <DashboardWidget161 title="DashboardWidget161" />
    <DashboardWidget28 title="DashboardWidget28" />
    <DashboardWidget124 title="DashboardWidget124" />
    <DashboardWidget103 title="DashboardWidget103" />
    <DashboardWidget65 title="DashboardWidget65" />
  </div>
</template>
