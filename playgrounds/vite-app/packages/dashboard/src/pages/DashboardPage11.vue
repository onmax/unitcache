<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState2()
onMounted(() => { document.title = `Dashboard 11 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p11">
    <h1>Dashboard page 11 ({{ count }})</h1>
    <DashboardWidget157 title="DashboardWidget157" />
    <DashboardWidget101 title="DashboardWidget101" />
    <DashboardWidget85 title="DashboardWidget85" />
  </div>
</template>

<style scoped>
.dashboard-p11 { display: grid; gap: 24px; }
</style>
