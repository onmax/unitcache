<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState26()
useHead({ title: `Audit 18 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p18">
    <h1>Audit page 18 ({{ count }})</h1>
    <AuditWidget144 title="AuditWidget144" />
    <AuditWidget205 title="AuditWidget205" />
    <AuditWidget9 title="AuditWidget9" />
    <AuditWidget132 title="AuditWidget132" />
    <AuditWidget197 title="AuditWidget197" />
    <AuditWidget213 title="AuditWidget213" />
  </div>
</template>
