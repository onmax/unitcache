<script setup lang="ts">

const route = useRoute()
const { count } = useAdminState19()
onMounted(() => { document.title = `Admin 11 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p11">
    <h1>Admin page 11 ({{ count }})</h1>
    <AdminWidget81 title="AdminWidget81" />
    <AdminWidget110 title="AdminWidget110" />
    <AdminWidget129 title="AdminWidget129" />
  </div>
</template>

<style scoped>
.admin-p11 { display: grid; gap: 23px; }
</style>
