<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState24()
useHead({ title: `Audit 19 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p19">
    <h1>Audit page 19 ({{ count }})</h1>
    <AuditWidget3 title="AuditWidget3" />
    <AuditWidget42 title="AuditWidget42" />
    <AuditWidget214 title="AuditWidget214" />
    <AuditWidget188 title="AuditWidget188" />
    <AuditWidget171 title="AuditWidget171" />
    <AuditWidget246 title="AuditWidget246" />
  </div>
</template>
