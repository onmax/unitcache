<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState2()
useHead({ title: `Admin 12 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p12">
    <h1>Admin page 12 ({{ count }})</h1>
    <AdminWidget246 title="AdminWidget246" />
    <AdminWidget158 title="AdminWidget158" />
    <AdminWidget204 title="AdminWidget204" />
  </div>
</template>
