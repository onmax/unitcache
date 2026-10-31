<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState28()
useHead({ title: `Admin 18 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p18">
    <h1>Admin page 18 ({{ count }})</h1>
    <AdminWidget225 title="AdminWidget225" />
    <AdminWidget186 title="AdminWidget186" />
    <AdminWidget89 title="AdminWidget89" />
    <AdminWidget52 title="AdminWidget52" />
    <AdminWidget247 title="AdminWidget247" />
    <AdminWidget181 title="AdminWidget181" />
  </div>
</template>
