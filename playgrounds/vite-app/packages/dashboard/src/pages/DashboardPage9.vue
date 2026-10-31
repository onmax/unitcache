<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState15()
onMounted(() => { document.title = `Dashboard 9 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p9">
    <h1>Dashboard page 9 ({{ count }})</h1>
    <DashboardWidget158 title="DashboardWidget158" />
    <DashboardWidget132 title="DashboardWidget132" />
    <DashboardWidget68 title="DashboardWidget68" />
    <DashboardWidget51 title="DashboardWidget51" />
    <DashboardWidget106 title="DashboardWidget106" />
  </div>
</template>

<style scoped>
.dashboard-p9 { display: grid; gap: 11px; }
</style>
