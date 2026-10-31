<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState2()
onMounted(() => { document.title = `Admin 5 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p5">
    <h1>Admin page 5 ({{ count }})</h1>
    <AdminWidget136 title="AdminWidget136" />
    <AdminWidget24 title="AdminWidget24" />
    <AdminWidget26 title="AdminWidget26" />
  </div>
</template>

<style scoped>
.admin-p5 { display: grid; gap: 22px; }
</style>
