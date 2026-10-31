<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState12()
onMounted(() => { document.title = `Dashboard 3 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p3">
    <h1>Dashboard page 3 ({{ count }})</h1>
    <DashboardWidget1 title="DashboardWidget1" />
    <DashboardWidget92 title="DashboardWidget92" />
    <DashboardWidget18 title="DashboardWidget18" />
    <DashboardWidget88 title="DashboardWidget88" />
  </div>
</template>

<style scoped>
.dashboard-p3 { display: grid; gap: 8px; }
</style>
