<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState8()
useHead({ title: `Admin 8 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p8">
    <h1>Admin page 8 ({{ count }})</h1>
    <AdminWidget168 title="AdminWidget168" />
    <AdminWidget128 title="AdminWidget128" />
    <AdminWidget228 title="AdminWidget228" />
    <AdminWidget219 title="AdminWidget219" />
  </div>
</template>
