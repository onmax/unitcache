<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState12()
useHead({ title: `Audit 16 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p16">
    <h1>Audit page 16 ({{ count }})</h1>
    <AuditWidget60 title="AuditWidget60" />
    <AuditWidget32 title="AuditWidget32" />
    <AuditWidget66 title="AuditWidget66" />
    <AuditWidget195 title="AuditWidget195" />
    <AuditWidget177 title="AuditWidget177" />
    <AuditWidget74 title="AuditWidget74" />
  </div>
</template>
