<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState19()
useHead({ title: `Audit 0 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p0">
    <h1>Audit page 0 ({{ count }})</h1>
    <AuditWidget10 title="AuditWidget10" />
    <AuditWidget47 title="AuditWidget47" />
    <AuditWidget142 title="AuditWidget142" />
    <AuditWidget115 title="AuditWidget115" />
  </div>
</template>
