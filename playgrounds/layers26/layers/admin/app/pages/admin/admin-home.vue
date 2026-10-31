<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState9()
useHead({ title: `Admin 0 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p0">
    <h1>Admin page 0 ({{ count }})</h1>
    <AdminWidget92 title="AdminWidget92" />
    <AdminWidget231 title="AdminWidget231" />
    <AdminWidget177 title="AdminWidget177" />
    <AdminWidget160 title="AdminWidget160" />
    <AdminWidget13 title="AdminWidget13" />
  </div>
</template>
