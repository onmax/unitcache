<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState9()
useHead({ title: `Admin 4 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p4">
    <h1>Admin page 4 ({{ count }})</h1>
    <AdminWidget77 title="AdminWidget77" />
    <AdminWidget92 title="AdminWidget92" />
    <AdminWidget179 title="AdminWidget179" />
    <AdminWidget150 title="AdminWidget150" />
    <AdminWidget249 title="AdminWidget249" />
  </div>
</template>
