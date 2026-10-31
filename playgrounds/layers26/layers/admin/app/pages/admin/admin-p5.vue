<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState19()
useHead({ title: `Admin 5 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p5">
    <h1>Admin page 5 ({{ count }})</h1>
    <AdminWidget231 title="AdminWidget231" />
    <AdminWidget115 title="AdminWidget115" />
    <AdminWidget208 title="AdminWidget208" />
    <AdminWidget22 title="AdminWidget22" />
  </div>
</template>
