<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState16()
useHead({ title: `Audit 14 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p14">
    <h1>Audit page 14 ({{ count }})</h1>
    <AuditWidget26 title="AuditWidget26" />
    <AuditWidget183 title="AuditWidget183" />
    <AuditWidget65 title="AuditWidget65" />
    <AuditWidget167 title="AuditWidget167" />
    <AuditWidget213 title="AuditWidget213" />
    <AuditWidget72 title="AuditWidget72" />
  </div>
</template>
