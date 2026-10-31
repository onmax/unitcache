<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState29()
useHead({ title: `Audit 13 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p13">
    <h1>Audit page 13 ({{ count }})</h1>
    <AuditWidget53 title="AuditWidget53" />
    <AuditWidget21 title="AuditWidget21" />
    <AuditWidget101 title="AuditWidget101" />
    <AuditWidget136 title="AuditWidget136" />
    <AuditWidget139 title="AuditWidget139" />
    <AuditWidget29 title="AuditWidget29" />
  </div>
</template>
