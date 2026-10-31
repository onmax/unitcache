<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState12()
useHead({ title: `Admin 3 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p3">
    <h1>Admin page 3 ({{ count }})</h1>
    <AdminWidget221 title="AdminWidget221" />
    <AdminWidget2 title="AdminWidget2" />
    <AdminWidget241 title="AdminWidget241" />
    <AdminWidget103 title="AdminWidget103" />
    <AdminWidget64 title="AdminWidget64" />
  </div>
</template>
