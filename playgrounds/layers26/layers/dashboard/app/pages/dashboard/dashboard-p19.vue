<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState17()
useHead({ title: `Dashboard 19 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p19">
    <h1>Dashboard page 19 ({{ count }})</h1>
    <DashboardWidget97 title="DashboardWidget97" />
    <DashboardWidget88 title="DashboardWidget88" />
    <DashboardWidget206 title="DashboardWidget206" />
  </div>
</template>
