<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState7()
useHead({ title: `Dashboard 9 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p9">
    <h1>Dashboard page 9 ({{ count }})</h1>
    <DashboardWidget0 title="DashboardWidget0" />
    <DashboardWidget243 title="DashboardWidget243" />
    <DashboardWidget25 title="DashboardWidget25" />
    <DashboardWidget125 title="DashboardWidget125" />
    <DashboardWidget162 title="DashboardWidget162" />
  </div>
</template>
