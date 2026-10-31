<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState3()
useHead({ title: `Admin 8 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p8">
    <h1>Admin page 8 ({{ count }})</h1>
    <AdminWidget207 title="AdminWidget207" />
    <AdminWidget163 title="AdminWidget163" />
    <AdminWidget22 title="AdminWidget22" />
  </div>
</template>
