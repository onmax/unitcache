<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState17()
useHead({ title: `Dashboard 15 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p15">
    <h1>Dashboard page 15 ({{ count }})</h1>
    <DashboardWidget218 title="DashboardWidget218" />
    <DashboardWidget105 title="DashboardWidget105" />
    <DashboardWidget13 title="DashboardWidget13" />
  </div>
</template>
