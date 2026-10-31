<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState20()
useHead({ title: `Admin 14 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p14">
    <h1>Admin page 14 ({{ count }})</h1>
    <AdminWidget19 title="AdminWidget19" />
    <AdminWidget41 title="AdminWidget41" />
    <AdminWidget167 title="AdminWidget167" />
    <AdminWidget2 title="AdminWidget2" />
  </div>
</template>
