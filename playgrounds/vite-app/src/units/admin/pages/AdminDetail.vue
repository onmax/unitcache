<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState7()
onMounted(() => { document.title = `Admin 1 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p1">
    <h1>Admin page 1 ({{ count }})</h1>
    <AdminWidget160 title="AdminWidget160" />
    <AdminWidget164 title="AdminWidget164" />
    <AdminWidget66 title="AdminWidget66" />
    <AdminWidget116 title="AdminWidget116" />
    <AdminWidget121 title="AdminWidget121" />
    <AdminWidget64 title="AdminWidget64" />
  </div>
</template>

<style scoped>
.admin-p1 { display: grid; gap: 14px; }
</style>
