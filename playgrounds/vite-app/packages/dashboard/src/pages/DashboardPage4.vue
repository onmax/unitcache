<script setup lang="ts">

const route = useRoute()
const { count } = useDashboardState16()
onMounted(() => { document.title = `Dashboard 4 ${route.params.dashboardId ?? ''}` })
</script>

<template>
  <div class="page dashboard-p4">
    <h1>Dashboard page 4 ({{ count }})</h1>
    <DashboardWidget104 title="DashboardWidget104" />
    <DashboardWidget41 title="DashboardWidget41" />
    <DashboardWidget161 title="DashboardWidget161" />
    <DashboardWidget164 title="DashboardWidget164" />
  </div>
</template>

<style scoped>
.dashboard-p4 { display: grid; gap: 16px; }
</style>
