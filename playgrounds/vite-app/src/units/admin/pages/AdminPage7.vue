<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState18()
onMounted(() => { document.title = `Admin 7 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p7">
    <h1>Admin page 7 ({{ count }})</h1>
    <AdminWidget142 title="AdminWidget142" />
    <AdminWidget32 title="AdminWidget32" />
    <AdminWidget148 title="AdminWidget148" />
    <AdminWidget77 title="AdminWidget77" />
    <AdminWidget8 title="AdminWidget8" />
  </div>
</template>

<style scoped>
.admin-p7 { display: grid; gap: 12px; }
</style>
