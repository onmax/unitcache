<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState13()
useHead({ title: `Audit 5 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p5">
    <h1>Audit page 5 ({{ count }})</h1>
    <AuditWidget15 title="AuditWidget15" />
    <AuditWidget95 title="AuditWidget95" />
    <AuditWidget221 title="AuditWidget221" />
    <AuditWidget31 title="AuditWidget31" />
    <AuditWidget141 title="AuditWidget141" />
  </div>
</template>
