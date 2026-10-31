<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState3()
useHead({ title: `Admin 9 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p9">
    <h1>Admin page 9 ({{ count }})</h1>
    <AdminWidget80 title="AdminWidget80" />
    <AdminWidget144 title="AdminWidget144" />
    <AdminWidget245 title="AdminWidget245" />
  </div>
</template>
