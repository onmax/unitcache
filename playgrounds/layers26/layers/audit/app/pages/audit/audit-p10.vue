<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState28()
useHead({ title: `Audit 10 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p10">
    <h1>Audit page 10 ({{ count }})</h1>
    <AuditWidget134 title="AuditWidget134" />
    <AuditWidget95 title="AuditWidget95" />
    <AuditWidget220 title="AuditWidget220" />
    <AuditWidget149 title="AuditWidget149" />
  </div>
</template>
