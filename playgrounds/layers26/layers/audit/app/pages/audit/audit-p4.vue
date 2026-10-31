<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState18()
useHead({ title: `Audit 4 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p4">
    <h1>Audit page 4 ({{ count }})</h1>
    <AuditWidget216 title="AuditWidget216" />
    <AuditWidget135 title="AuditWidget135" />
    <AuditWidget98 title="AuditWidget98" />
    <AuditWidget94 title="AuditWidget94" />
    <AuditWidget140 title="AuditWidget140" />
  </div>
</template>
