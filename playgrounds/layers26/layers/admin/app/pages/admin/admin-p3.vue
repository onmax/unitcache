<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState8()
useHead({ title: `Admin 3 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p3">
    <h1>Admin page 3 ({{ count }})</h1>
    <AdminWidget22 title="AdminWidget22" />
    <AdminWidget26 title="AdminWidget26" />
    <AdminWidget240 title="AdminWidget240" />
    <AdminWidget234 title="AdminWidget234" />
    <AdminWidget93 title="AdminWidget93" />
    <AdminWidget29 title="AdminWidget29" />
  </div>
</template>
