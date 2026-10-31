<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState14()
onMounted(() => { document.title = `Dashboard 10 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p10">
    <h1>Dashboard page 10 ({{ count }})</h1>
    <DashboardWidget89 title="DashboardWidget89" />
    <DashboardWidget59 title="DashboardWidget59" />
    <DashboardWidget151 title="DashboardWidget151" />
  </div>
</template>

<style scoped>
.dashboard-p10 { display: grid; gap: 10px; }
</style>
