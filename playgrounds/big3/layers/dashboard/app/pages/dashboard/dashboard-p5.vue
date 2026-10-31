<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState27()
useHead({ title: `Dashboard 5 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p5">
    <h1>Dashboard page 5 ({{ count }})</h1>
    <DashboardWidget248 title="DashboardWidget248" />
    <DashboardWidget163 title="DashboardWidget163" />
    <DashboardWidget159 title="DashboardWidget159" />
    <DashboardWidget66 title="DashboardWidget66" />
    <DashboardWidget238 title="DashboardWidget238" />
    <DashboardWidget142 title="DashboardWidget142" />
  </div>
</template>
