<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState14()
useHead({ title: `Admin 6 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p6">
    <h1>Admin page 6 ({{ count }})</h1>
    <AdminWidget188 title="AdminWidget188" />
    <AdminWidget203 title="AdminWidget203" />
    <AdminWidget136 title="AdminWidget136" />
  </div>
</template>
