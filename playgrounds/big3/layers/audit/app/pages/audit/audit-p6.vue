<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState5()
useHead({ title: `Audit 6 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p6">
    <h1>Audit page 6 ({{ count }})</h1>
    <AuditWidget222 title="AuditWidget222" />
    <AuditWidget78 title="AuditWidget78" />
    <AuditWidget24 title="AuditWidget24" />
    <AuditWidget150 title="AuditWidget150" />
    <AuditWidget58 title="AuditWidget58" />
  </div>
</template>
