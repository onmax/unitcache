<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState2()
useHead({ title: `Admin 4 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p4">
    <h1>Admin page 4 ({{ count }})</h1>
    <AdminWidget117 title="AdminWidget117" />
    <AdminWidget92 title="AdminWidget92" />
    <AdminWidget194 title="AdminWidget194" />
    <AdminWidget69 title="AdminWidget69" />
    <AdminWidget91 title="AdminWidget91" />
  </div>
</template>
