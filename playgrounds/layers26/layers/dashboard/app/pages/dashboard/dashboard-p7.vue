<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['dashboard-guard'] })
const route = useRoute()
const { count } = useDashboardState24()
useHead({ title: `Dashboard 7 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p7">
    <h1>Dashboard page 7 ({{ count }})</h1>
    <DashboardWidget199 title="DashboardWidget199" />
    <DashboardWidget175 title="DashboardWidget175" />
    <DashboardWidget221 title="DashboardWidget221" />
    <DashboardWidget164 title="DashboardWidget164" />
    <DashboardWidget40 title="DashboardWidget40" />
  </div>
</template>
