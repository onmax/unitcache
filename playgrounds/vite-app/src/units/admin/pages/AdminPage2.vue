<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState7()
onMounted(() => { document.title = `Admin 2 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p2">
    <h1>Admin page 2 ({{ count }})</h1>
    <AdminWidget107 title="AdminWidget107" />
    <AdminWidget9 title="AdminWidget9" />
    <AdminWidget96 title="AdminWidget96" />
    <AdminWidget106 title="AdminWidget106" />
    <AdminWidget74 title="AdminWidget74" />
    <AdminWidget60 title="AdminWidget60" />
  </div>
</template>

<style scoped>
.admin-p2 { display: grid; gap: 24px; }
</style>
