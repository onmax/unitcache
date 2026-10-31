<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState15()
useHead({ title: `Admin 17 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p17">
    <h1>Admin page 17 ({{ count }})</h1>
    <AdminWidget31 title="AdminWidget31" />
    <AdminWidget143 title="AdminWidget143" />
    <AdminWidget64 title="AdminWidget64" />
    <AdminWidget130 title="AdminWidget130" />
  </div>
</template>
