<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState20()
useHead({ title: `Admin 10 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p10">
    <h1>Admin page 10 ({{ count }})</h1>
    <AdminWidget89 title="AdminWidget89" />
    <AdminWidget1 title="AdminWidget1" />
    <AdminWidget165 title="AdminWidget165" />
    <AdminWidget34 title="AdminWidget34" />
  </div>
</template>
