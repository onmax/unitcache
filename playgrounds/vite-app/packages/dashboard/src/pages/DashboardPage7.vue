<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState13()
onMounted(() => { document.title = `Dashboard 7 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p7">
    <h1>Dashboard page 7 ({{ count }})</h1>
    <DashboardWidget98 title="DashboardWidget98" />
    <DashboardWidget56 title="DashboardWidget56" />
    <DashboardWidget165 title="DashboardWidget165" />
    <DashboardWidget45 title="DashboardWidget45" />
  </div>
</template>

<style scoped>
.dashboard-p7 { display: grid; gap: 24px; }
</style>
