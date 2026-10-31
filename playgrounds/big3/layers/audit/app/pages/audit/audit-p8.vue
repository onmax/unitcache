<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState9()
useHead({ title: `Audit 8 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p8">
    <h1>Audit page 8 ({{ count }})</h1>
    <AuditWidget197 title="AuditWidget197" />
    <AuditWidget63 title="AuditWidget63" />
    <AuditWidget182 title="AuditWidget182" />
  </div>
</template>
