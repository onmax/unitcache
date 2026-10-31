<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState1()
useHead({ title: `Admin 2 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p2">
    <h1>Admin page 2 ({{ count }})</h1>
    <AdminWidget48 title="AdminWidget48" />
    <AdminWidget4 title="AdminWidget4" />
    <AdminWidget204 title="AdminWidget204" />
    <AdminWidget117 title="AdminWidget117" />
    <AdminWidget140 title="AdminWidget140" />
  </div>
</template>
