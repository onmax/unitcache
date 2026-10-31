<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState23()
useHead({ title: `Admin 16 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p16">
    <h1>Admin page 16 ({{ count }})</h1>
    <AdminWidget8 title="AdminWidget8" />
    <AdminWidget173 title="AdminWidget173" />
    <AdminWidget98 title="AdminWidget98" />
    <AdminWidget58 title="AdminWidget58" />
    <AdminWidget57 title="AdminWidget57" />
  </div>
</template>
