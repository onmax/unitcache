<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState5()
onMounted(() => { document.title = `Admin 9 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p9">
    <h1>Admin page 9 ({{ count }})</h1>
    <AdminWidget99 title="AdminWidget99" />
    <AdminWidget4 title="AdminWidget4" />
    <AdminWidget12 title="AdminWidget12" />
    <AdminWidget5 title="AdminWidget5" />
  </div>
</template>

<style scoped>
.admin-p9 { display: grid; gap: 19px; }
</style>
