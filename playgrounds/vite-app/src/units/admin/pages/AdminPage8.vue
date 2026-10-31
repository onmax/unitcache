<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState4()
onMounted(() => { document.title = `Admin 8 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p8">
    <h1>Admin page 8 ({{ count }})</h1>
    <AdminWidget77 title="AdminWidget77" />
    <AdminWidget123 title="AdminWidget123" />
    <AdminWidget4 title="AdminWidget4" />
    <AdminWidget113 title="AdminWidget113" />
  </div>
</template>

<style scoped>
.admin-p8 { display: grid; gap: 21px; }
</style>
