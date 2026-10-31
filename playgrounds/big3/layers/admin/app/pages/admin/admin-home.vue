<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState5()
useHead({ title: `Admin 0 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p0">
    <h1>Admin page 0 ({{ count }})</h1>
    <AdminWidget37 title="AdminWidget37" />
    <AdminWidget63 title="AdminWidget63" />
    <AdminWidget47 title="AdminWidget47" />
    <AdminWidget75 title="AdminWidget75" />
  </div>
</template>
