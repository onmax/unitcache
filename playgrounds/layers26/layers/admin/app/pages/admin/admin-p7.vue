<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState19()
useHead({ title: `Admin 7 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p7">
    <h1>Admin page 7 ({{ count }})</h1>
    <AdminWidget65 title="AdminWidget65" />
    <AdminWidget54 title="AdminWidget54" />
    <AdminWidget241 title="AdminWidget241" />
  </div>
</template>
