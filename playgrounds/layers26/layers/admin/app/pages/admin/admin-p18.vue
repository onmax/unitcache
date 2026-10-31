<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState28()
useHead({ title: `Admin 18 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p18">
    <h1>Admin page 18 ({{ count }})</h1>
    <AdminWidget132 title="AdminWidget132" />
    <AdminWidget43 title="AdminWidget43" />
    <AdminWidget3 title="AdminWidget3" />
  </div>
</template>
