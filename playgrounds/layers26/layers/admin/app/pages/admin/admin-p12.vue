<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState8()
useHead({ title: `Admin 12 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p12">
    <h1>Admin page 12 ({{ count }})</h1>
    <AdminWidget199 title="AdminWidget199" />
    <AdminWidget122 title="AdminWidget122" />
    <AdminWidget29 title="AdminWidget29" />
  </div>
</template>
