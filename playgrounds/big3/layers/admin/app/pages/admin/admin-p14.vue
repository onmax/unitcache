<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState13()
useHead({ title: `Admin 14 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p14">
    <h1>Admin page 14 ({{ count }})</h1>
    <AdminWidget84 title="AdminWidget84" />
    <AdminWidget206 title="AdminWidget206" />
    <AdminWidget14 title="AdminWidget14" />
    <AdminWidget204 title="AdminWidget204" />
    <AdminWidget248 title="AdminWidget248" />
  </div>
</template>
