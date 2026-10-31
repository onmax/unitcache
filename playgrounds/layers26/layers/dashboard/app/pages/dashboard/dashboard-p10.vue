<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState8()
useHead({ title: `Dashboard 10 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p10">
    <h1>Dashboard page 10 ({{ count }})</h1>
    <DashboardWidget23 title="DashboardWidget23" />
    <DashboardWidget145 title="DashboardWidget145" />
    <DashboardWidget62 title="DashboardWidget62" />
    <DashboardWidget56 title="DashboardWidget56" />
    <DashboardWidget4 title="DashboardWidget4" />
  </div>
</template>
