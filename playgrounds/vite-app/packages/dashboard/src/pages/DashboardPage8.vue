<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState2()
onMounted(() => { document.title = `Dashboard 8 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p8">
    <h1>Dashboard page 8 ({{ count }})</h1>
    <DashboardWidget158 title="DashboardWidget158" />
    <DashboardWidget58 title="DashboardWidget58" />
    <DashboardWidget65 title="DashboardWidget65" />
    <DashboardWidget48 title="DashboardWidget48" />
    <DashboardWidget154 title="DashboardWidget154" />
  </div>
</template>

<style scoped>
.dashboard-p8 { display: grid; gap: 12px; }
</style>
