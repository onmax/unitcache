<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState19()
useHead({ title: `Admin 5 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p5">
    <h1>Admin page 5 ({{ count }})</h1>
    <AdminWidget205 title="AdminWidget205" />
    <AdminWidget171 title="AdminWidget171" />
    <AdminWidget158 title="AdminWidget158" />
  </div>
</template>
