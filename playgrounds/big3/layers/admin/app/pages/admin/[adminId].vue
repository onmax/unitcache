<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState5()
useHead({ title: `Admin 1 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p1">
    <h1>Admin page 1 ({{ count }})</h1>
    <AdminWidget52 title="AdminWidget52" />
    <AdminWidget243 title="AdminWidget243" />
    <AdminWidget168 title="AdminWidget168" />
    <AdminWidget64 title="AdminWidget64" />
    <AdminWidget217 title="AdminWidget217" />
    <AdminWidget207 title="AdminWidget207" />
  </div>
</template>
