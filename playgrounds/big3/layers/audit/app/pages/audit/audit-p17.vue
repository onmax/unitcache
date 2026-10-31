<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState0()
useHead({ title: `Audit 17 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p17">
    <h1>Audit page 17 ({{ count }})</h1>
    <AuditWidget228 title="AuditWidget228" />
    <AuditWidget185 title="AuditWidget185" />
    <AuditWidget74 title="AuditWidget74" />
    <AuditWidget118 title="AuditWidget118" />
    <AuditWidget57 title="AuditWidget57" />
    <AuditWidget47 title="AuditWidget47" />
  </div>
</template>
