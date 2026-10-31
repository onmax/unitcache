<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState3()
useHead({ title: `Dashboard 11 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p11">
    <h1>Dashboard page 11 ({{ count }})</h1>
    <DashboardWidget213 title="DashboardWidget213" />
    <DashboardWidget88 title="DashboardWidget88" />
    <DashboardWidget232 title="DashboardWidget232" />
    <DashboardWidget33 title="DashboardWidget33" />
    <DashboardWidget215 title="DashboardWidget215" />
    <DashboardWidget161 title="DashboardWidget161" />
  </div>
</template>
