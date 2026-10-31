<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState12()
useHead({ title: `Audit 16 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p16">
    <h1>Audit page 16 ({{ count }})</h1>
    <AuditWidget239 title="AuditWidget239" />
    <AuditWidget72 title="AuditWidget72" />
    <AuditWidget149 title="AuditWidget149" />
    <AuditWidget114 title="AuditWidget114" />
  </div>
</template>
