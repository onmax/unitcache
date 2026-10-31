<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState5()
useHead({ title: `Audit 12 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p12">
    <h1>Audit page 12 ({{ count }})</h1>
    <AuditWidget175 title="AuditWidget175" />
    <AuditWidget11 title="AuditWidget11" />
    <AuditWidget191 title="AuditWidget191" />
    <AuditWidget61 title="AuditWidget61" />
  </div>
</template>
