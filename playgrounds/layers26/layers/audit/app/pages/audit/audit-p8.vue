<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState20()
useHead({ title: `Audit 8 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p8">
    <h1>Audit page 8 ({{ count }})</h1>
    <AuditWidget142 title="AuditWidget142" />
    <AuditWidget78 title="AuditWidget78" />
    <AuditWidget143 title="AuditWidget143" />
    <AuditWidget22 title="AuditWidget22" />
    <AuditWidget189 title="AuditWidget189" />
  </div>
</template>
