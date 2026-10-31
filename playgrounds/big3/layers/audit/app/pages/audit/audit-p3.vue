<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState7()
useHead({ title: `Audit 3 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p3">
    <h1>Audit page 3 ({{ count }})</h1>
    <AuditWidget155 title="AuditWidget155" />
    <AuditWidget233 title="AuditWidget233" />
    <AuditWidget195 title="AuditWidget195" />
    <AuditWidget52 title="AuditWidget52" />
  </div>
</template>
