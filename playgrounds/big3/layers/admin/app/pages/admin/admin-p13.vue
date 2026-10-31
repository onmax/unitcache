<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState7()
useHead({ title: `Admin 13 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p13">
    <h1>Admin page 13 ({{ count }})</h1>
    <AdminWidget5 title="AdminWidget5" />
    <AdminWidget86 title="AdminWidget86" />
    <AdminWidget123 title="AdminWidget123" />
    <AdminWidget67 title="AdminWidget67" />
    <AdminWidget122 title="AdminWidget122" />
  </div>
</template>
