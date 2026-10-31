<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState27()
useHead({ title: `Audit 1 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p1">
    <h1>Audit page 1 ({{ count }})</h1>
    <AuditWidget125 title="AuditWidget125" />
    <AuditWidget221 title="AuditWidget221" />
    <AuditWidget192 title="AuditWidget192" />
  </div>
</template>
