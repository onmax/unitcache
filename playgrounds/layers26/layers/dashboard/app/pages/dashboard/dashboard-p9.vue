<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState17()
useHead({ title: `Dashboard 9 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p9">
    <h1>Dashboard page 9 ({{ count }})</h1>
    <DashboardWidget30 title="DashboardWidget30" />
    <DashboardWidget25 title="DashboardWidget25" />
    <DashboardWidget199 title="DashboardWidget199" />
    <DashboardWidget226 title="DashboardWidget226" />
    <DashboardWidget213 title="DashboardWidget213" />
  </div>
</template>
