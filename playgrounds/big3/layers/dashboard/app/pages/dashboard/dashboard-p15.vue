<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState29()
useHead({ title: `Dashboard 15 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p15">
    <h1>Dashboard page 15 ({{ count }})</h1>
    <DashboardWidget145 title="DashboardWidget145" />
    <DashboardWidget237 title="DashboardWidget237" />
    <DashboardWidget152 title="DashboardWidget152" />
    <DashboardWidget207 title="DashboardWidget207" />
    <DashboardWidget65 title="DashboardWidget65" />
  </div>
</template>
