<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState22()
useHead({ title: `Audit 5 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p5">
    <h1>Audit page 5 ({{ count }})</h1>
    <AuditWidget202 title="AuditWidget202" />
    <AuditWidget172 title="AuditWidget172" />
    <AuditWidget65 title="AuditWidget65" />
    <AuditWidget63 title="AuditWidget63" />
    <AuditWidget218 title="AuditWidget218" />
  </div>
</template>
