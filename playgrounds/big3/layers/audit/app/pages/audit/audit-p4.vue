<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState6()
useHead({ title: `Audit 4 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p4">
    <h1>Audit page 4 ({{ count }})</h1>
    <AuditWidget155 title="AuditWidget155" />
    <AuditWidget53 title="AuditWidget53" />
    <AuditWidget40 title="AuditWidget40" />
    <AuditWidget170 title="AuditWidget170" />
  </div>
</template>
