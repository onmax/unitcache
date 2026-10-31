<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState18()
useHead({ title: `Admin 15 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p15">
    <h1>Admin page 15 ({{ count }})</h1>
    <AdminWidget221 title="AdminWidget221" />
    <AdminWidget203 title="AdminWidget203" />
    <AdminWidget183 title="AdminWidget183" />
    <AdminWidget205 title="AdminWidget205" />
    <AdminWidget241 title="AdminWidget241" />
    <AdminWidget57 title="AdminWidget57" />
  </div>
</template>
