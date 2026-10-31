<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState26()
useHead({ title: `Admin 2 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p2">
    <h1>Admin page 2 ({{ count }})</h1>
    <AdminWidget197 title="AdminWidget197" />
    <AdminWidget114 title="AdminWidget114" />
    <AdminWidget33 title="AdminWidget33" />
  </div>
</template>
