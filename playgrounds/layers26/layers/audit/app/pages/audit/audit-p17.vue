<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState19()
useHead({ title: `Audit 17 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p17">
    <h1>Audit page 17 ({{ count }})</h1>
    <AuditWidget246 title="AuditWidget246" />
    <AuditWidget229 title="AuditWidget229" />
    <AuditWidget103 title="AuditWidget103" />
    <AuditWidget237 title="AuditWidget237" />
    <AuditWidget194 title="AuditWidget194" />
    <AuditWidget48 title="AuditWidget48" />
  </div>
</template>
