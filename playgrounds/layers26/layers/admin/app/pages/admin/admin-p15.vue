<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState5()
useHead({ title: `Admin 15 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p15">
    <h1>Admin page 15 ({{ count }})</h1>
    <AdminWidget137 title="AdminWidget137" />
    <AdminWidget30 title="AdminWidget30" />
    <AdminWidget151 title="AdminWidget151" />
    <AdminWidget136 title="AdminWidget136" />
    <AdminWidget129 title="AdminWidget129" />
    <AdminWidget96 title="AdminWidget96" />
  </div>
</template>
