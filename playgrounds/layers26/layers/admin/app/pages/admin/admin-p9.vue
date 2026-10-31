<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState27()
useHead({ title: `Admin 9 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p9">
    <h1>Admin page 9 ({{ count }})</h1>
    <AdminWidget188 title="AdminWidget188" />
    <AdminWidget229 title="AdminWidget229" />
    <AdminWidget120 title="AdminWidget120" />
    <AdminWidget185 title="AdminWidget185" />
    <AdminWidget36 title="AdminWidget36" />
    <AdminWidget226 title="AdminWidget226" />
  </div>
</template>
