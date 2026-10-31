<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState9()
useHead({ title: `Audit 2 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p2">
    <h1>Audit page 2 ({{ count }})</h1>
    <AuditWidget210 title="AuditWidget210" />
    <AuditWidget35 title="AuditWidget35" />
    <AuditWidget77 title="AuditWidget77" />
  </div>
</template>
