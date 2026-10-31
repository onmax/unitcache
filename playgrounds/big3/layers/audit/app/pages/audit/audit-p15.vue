<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState28()
useHead({ title: `Audit 15 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p15">
    <h1>Audit page 15 ({{ count }})</h1>
    <AuditWidget172 title="AuditWidget172" />
    <AuditWidget25 title="AuditWidget25" />
    <AuditWidget89 title="AuditWidget89" />
    <AuditWidget54 title="AuditWidget54" />
    <AuditWidget101 title="AuditWidget101" />
    <AuditWidget167 title="AuditWidget167" />
  </div>
</template>
