<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState17()
onMounted(() => { document.title = `Dashboard 5 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p5">
    <h1>Dashboard page 5 ({{ count }})</h1>
    <DashboardWidget47 title="DashboardWidget47" />
    <DashboardWidget137 title="DashboardWidget137" />
    <DashboardWidget158 title="DashboardWidget158" />
    <DashboardWidget17 title="DashboardWidget17" />
    <DashboardWidget101 title="DashboardWidget101" />
    <DashboardWidget26 title="DashboardWidget26" />
  </div>
</template>

<style scoped>
.dashboard-p5 { display: grid; gap: 19px; }
</style>
