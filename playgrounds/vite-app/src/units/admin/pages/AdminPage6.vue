<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState3()
onMounted(() => { document.title = `Admin 6 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p6">
    <h1>Admin page 6 ({{ count }})</h1>
    <AdminWidget15 title="AdminWidget15" />
    <AdminWidget128 title="AdminWidget128" />
    <AdminWidget45 title="AdminWidget45" />
    <AdminWidget98 title="AdminWidget98" />
    <AdminWidget150 title="AdminWidget150" />
    <AdminWidget10 title="AdminWidget10" />
  </div>
</template>

<style scoped>
.admin-p6 { display: grid; gap: 17px; }
</style>
