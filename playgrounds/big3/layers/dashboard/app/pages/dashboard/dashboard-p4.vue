<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState5()
useHead({ title: `Dashboard 4 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p4">
    <h1>Dashboard page 4 ({{ count }})</h1>
    <DashboardWidget87 title="DashboardWidget87" />
    <DashboardWidget20 title="DashboardWidget20" />
    <DashboardWidget83 title="DashboardWidget83" />
    <DashboardWidget144 title="DashboardWidget144" />
  </div>
</template>
