<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState2()
onMounted(() => { document.title = `Admin 10 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p10">
    <h1>Admin page 10 ({{ count }})</h1>
    <AdminWidget1 title="AdminWidget1" />
    <AdminWidget14 title="AdminWidget14" />
    <AdminWidget17 title="AdminWidget17" />
    <AdminWidget74 title="AdminWidget74" />
    <AdminWidget153 title="AdminWidget153" />
    <AdminWidget89 title="AdminWidget89" />
  </div>
</template>

<style scoped>
.admin-p10 { display: grid; gap: 24px; }
</style>
