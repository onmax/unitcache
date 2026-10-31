<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState27()
useHead({ title: `Admin 16 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p16">
    <h1>Admin page 16 ({{ count }})</h1>
    <AdminWidget140 title="AdminWidget140" />
    <AdminWidget103 title="AdminWidget103" />
    <AdminWidget13 title="AdminWidget13" />
    <AdminWidget146 title="AdminWidget146" />
    <AdminWidget126 title="AdminWidget126" />
  </div>
</template>
