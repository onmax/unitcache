<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState21()
useHead({ title: `Admin 11 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p11">
    <h1>Admin page 11 ({{ count }})</h1>
    <AdminWidget46 title="AdminWidget46" />
    <AdminWidget141 title="AdminWidget141" />
    <AdminWidget33 title="AdminWidget33" />
    <AdminWidget194 title="AdminWidget194" />
    <AdminWidget146 title="AdminWidget146" />
  </div>
</template>
