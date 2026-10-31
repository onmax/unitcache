<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState6()
onMounted(() => { document.title = `Dashboard 2 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p2">
    <h1>Dashboard page 2 ({{ count }})</h1>
    <DashboardWidget98 title="DashboardWidget98" />
    <DashboardWidget34 title="DashboardWidget34" />
    <DashboardWidget114 title="DashboardWidget114" />
    <DashboardWidget145 title="DashboardWidget145" />
    <DashboardWidget54 title="DashboardWidget54" />
    <DashboardWidget24 title="DashboardWidget24" />
  </div>
</template>

<style scoped>
.dashboard-p2 { display: grid; gap: 23px; }
</style>
