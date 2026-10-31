<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState14()
useHead({ title: `Audit 3 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p3">
    <h1>Audit page 3 ({{ count }})</h1>
    <AuditWidget61 title="AuditWidget61" />
    <AuditWidget71 title="AuditWidget71" />
    <AuditWidget7 title="AuditWidget7" />
    <AuditWidget68 title="AuditWidget68" />
  </div>
</template>
