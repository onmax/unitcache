<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState2()
useHead({ title: `Audit 6 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p6">
    <h1>Audit page 6 ({{ count }})</h1>
    <AuditWidget137 title="AuditWidget137" />
    <AuditWidget164 title="AuditWidget164" />
    <AuditWidget103 title="AuditWidget103" />
    <AuditWidget66 title="AuditWidget66" />
  </div>
</template>
