<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState17()
useHead({ title: `Audit 11 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p11">
    <h1>Audit page 11 ({{ count }})</h1>
    <AuditWidget38 title="AuditWidget38" />
    <AuditWidget50 title="AuditWidget50" />
    <AuditWidget16 title="AuditWidget16" />
    <AuditWidget195 title="AuditWidget195" />
  </div>
</template>
