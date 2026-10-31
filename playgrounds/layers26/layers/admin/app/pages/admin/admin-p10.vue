<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState7()
useHead({ title: `Admin 10 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p10">
    <h1>Admin page 10 ({{ count }})</h1>
    <AdminWidget11 title="AdminWidget11" />
    <AdminWidget27 title="AdminWidget27" />
    <AdminWidget120 title="AdminWidget120" />
  </div>
</template>
