<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState4()
useHead({ title: `Admin 19 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p19">
    <h1>Admin page 19 ({{ count }})</h1>
    <AdminWidget190 title="AdminWidget190" />
    <AdminWidget72 title="AdminWidget72" />
    <AdminWidget160 title="AdminWidget160" />
    <AdminWidget200 title="AdminWidget200" />
    <AdminWidget93 title="AdminWidget93" />
  </div>
</template>
