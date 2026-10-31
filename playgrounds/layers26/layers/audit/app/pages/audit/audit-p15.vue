<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState27()
useHead({ title: `Audit 15 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p15">
    <h1>Audit page 15 ({{ count }})</h1>
    <AuditWidget70 title="AuditWidget70" />
    <AuditWidget136 title="AuditWidget136" />
    <AuditWidget140 title="AuditWidget140" />
    <AuditWidget227 title="AuditWidget227" />
    <AuditWidget125 title="AuditWidget125" />
  </div>
</template>
