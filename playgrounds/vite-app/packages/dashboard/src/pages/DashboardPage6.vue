<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState13()
onMounted(() => { document.title = `Dashboard 6 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p6">
    <h1>Dashboard page 6 ({{ count }})</h1>
    <DashboardWidget162 title="DashboardWidget162" />
    <DashboardWidget164 title="DashboardWidget164" />
    <DashboardWidget66 title="DashboardWidget66" />
    <DashboardWidget129 title="DashboardWidget129" />
  </div>
</template>

<style scoped>
.dashboard-p6 { display: grid; gap: 15px; }
</style>
