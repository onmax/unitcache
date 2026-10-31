<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState3()
useHead({ title: `Admin 7 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p7">
    <h1>Admin page 7 ({{ count }})</h1>
    <AdminWidget173 title="AdminWidget173" />
    <AdminWidget74 title="AdminWidget74" />
    <AdminWidget36 title="AdminWidget36" />
    <AdminWidget232 title="AdminWidget232" />
  </div>
</template>
