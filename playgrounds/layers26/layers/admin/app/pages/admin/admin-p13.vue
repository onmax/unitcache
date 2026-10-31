<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState8()
useHead({ title: `Admin 13 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p13">
    <h1>Admin page 13 ({{ count }})</h1>
    <AdminWidget162 title="AdminWidget162" />
    <AdminWidget67 title="AdminWidget67" />
    <AdminWidget24 title="AdminWidget24" />
    <AdminWidget197 title="AdminWidget197" />
    <AdminWidget11 title="AdminWidget11" />
    <AdminWidget47 title="AdminWidget47" />
  </div>
</template>
