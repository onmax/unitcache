<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState10()
onMounted(() => { document.title = `Admin 3 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p3">
    <h1>Admin page 3 ({{ count }})</h1>
    <AdminWidget144 title="AdminWidget144" />
    <AdminWidget164 title="AdminWidget164" />
    <AdminWidget21 title="AdminWidget21" />
  </div>
</template>

<style scoped>
.admin-p3 { display: grid; gap: 24px; }
</style>
