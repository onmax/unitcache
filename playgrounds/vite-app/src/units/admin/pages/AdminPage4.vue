<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState7()
onMounted(() => { document.title = `Admin 4 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p4">
    <h1>Admin page 4 ({{ count }})</h1>
    <AdminWidget169 title="AdminWidget169" />
    <AdminWidget155 title="AdminWidget155" />
    <AdminWidget148 title="AdminWidget148" />
  </div>
</template>

<style scoped>
.admin-p4 { display: grid; gap: 17px; }
</style>
