<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState5()
useHead({ title: `Admin 11 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p11">
    <h1>Admin page 11 ({{ count }})</h1>
    <AdminWidget83 title="AdminWidget83" />
    <AdminWidget45 title="AdminWidget45" />
    <AdminWidget171 title="AdminWidget171" />
    <AdminWidget77 title="AdminWidget77" />
    <AdminWidget155 title="AdminWidget155" />
    <AdminWidget169 title="AdminWidget169" />
  </div>
</template>
