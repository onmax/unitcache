<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState29()
useHead({ title: `Admin 17 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p17">
    <h1>Admin page 17 ({{ count }})</h1>
    <AdminWidget129 title="AdminWidget129" />
    <AdminWidget52 title="AdminWidget52" />
    <AdminWidget203 title="AdminWidget203" />
    <AdminWidget64 title="AdminWidget64" />
    <AdminWidget11 title="AdminWidget11" />
    <AdminWidget24 title="AdminWidget24" />
  </div>
</template>
