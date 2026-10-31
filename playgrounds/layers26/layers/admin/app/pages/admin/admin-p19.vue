<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['admin-guard'] })
const route = useRoute()
const { count } = useAdminState10()
useHead({ title: `Admin 19 ${route.params.adminId ?? ''}` })
</script>

<template>
  <div class="page admin-p19">
    <h1>Admin page 19 ({{ count }})</h1>
    <AdminWidget178 title="AdminWidget178" />
    <AdminWidget78 title="AdminWidget78" />
    <AdminWidget164 title="AdminWidget164" />
    <AdminWidget196 title="AdminWidget196" />
  </div>
</template>
