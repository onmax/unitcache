<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState28()
useHead({ title: `Dashboard 16 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p16">
    <h1>Dashboard page 16 ({{ count }})</h1>
    <DashboardWidget81 title="DashboardWidget81" />
    <DashboardWidget44 title="DashboardWidget44" />
    <DashboardWidget118 title="DashboardWidget118" />
    <DashboardWidget170 title="DashboardWidget170" />
    <DashboardWidget185 title="DashboardWidget185" />
    <DashboardWidget28 title="DashboardWidget28" />
  </div>
</template>
