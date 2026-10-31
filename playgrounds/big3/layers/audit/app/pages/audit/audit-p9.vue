<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState2()
useHead({ title: `Audit 9 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p9">
    <h1>Audit page 9 ({{ count }})</h1>
    <AuditWidget206 title="AuditWidget206" />
    <AuditWidget210 title="AuditWidget210" />
    <AuditWidget173 title="AuditWidget173" />
  </div>
</template>
