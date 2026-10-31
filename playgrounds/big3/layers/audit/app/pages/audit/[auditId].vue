<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState14()
useHead({ title: `Audit 1 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p1">
    <h1>Audit page 1 ({{ count }})</h1>
    <AuditWidget201 title="AuditWidget201" />
    <AuditWidget50 title="AuditWidget50" />
    <AuditWidget103 title="AuditWidget103" />
    <AuditWidget195 title="AuditWidget195" />
    <AuditWidget213 title="AuditWidget213" />
  </div>
</template>
