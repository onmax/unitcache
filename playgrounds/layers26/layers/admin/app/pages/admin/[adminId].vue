<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState7()
useHead({ title: `Admin 1 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p1">
    <h1>Admin page 1 ({{ count }})</h1>
    <AdminWidget134 title="AdminWidget134" />
    <AdminWidget225 title="AdminWidget225" />
    <AdminWidget216 title="AdminWidget216" />
    <AdminWidget175 title="AdminWidget175" />
    <AdminWidget9 title="AdminWidget9" />
    <AdminWidget229 title="AdminWidget229" />
  </div>
</template>
