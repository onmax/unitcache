<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState28()
useHead({ title: `Admin 6 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p6">
    <h1>Admin page 6 ({{ count }})</h1>
    <AdminWidget186 title="AdminWidget186" />
    <AdminWidget171 title="AdminWidget171" />
    <AdminWidget116 title="AdminWidget116" />
    <AdminWidget124 title="AdminWidget124" />
  </div>
</template>
