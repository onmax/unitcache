<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState18()
onMounted(() => { document.title = `Dashboard 1 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p1">
    <h1>Dashboard page 1 ({{ count }})</h1>
    <DashboardWidget118 title="DashboardWidget118" />
    <DashboardWidget15 title="DashboardWidget15" />
    <DashboardWidget2 title="DashboardWidget2" />
    <DashboardWidget22 title="DashboardWidget22" />
  </div>
</template>

<style scoped>
.dashboard-p1 { display: grid; gap: 16px; }
</style>
