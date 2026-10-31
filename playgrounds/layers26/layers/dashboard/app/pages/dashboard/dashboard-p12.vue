<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState16()
useHead({ title: `Dashboard 12 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p12">
    <h1>Dashboard page 12 ({{ count }})</h1>
    <DashboardWidget249 title="DashboardWidget249" />
    <DashboardWidget10 title="DashboardWidget10" />
    <DashboardWidget42 title="DashboardWidget42" />
  </div>
</template>
