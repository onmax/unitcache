<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState10()
useHead({ title: `Dashboard 8 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p8">
    <h1>Dashboard page 8 ({{ count }})</h1>
    <DashboardWidget234 title="DashboardWidget234" />
    <DashboardWidget203 title="DashboardWidget203" />
    <DashboardWidget225 title="DashboardWidget225" />
  </div>
</template>
