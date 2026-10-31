<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState2()
useHead({ title: `Audit 13 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p13">
    <h1>Audit page 13 ({{ count }})</h1>
    <AuditWidget74 title="AuditWidget74" />
    <AuditWidget175 title="AuditWidget175" />
    <AuditWidget186 title="AuditWidget186" />
    <AuditWidget79 title="AuditWidget79" />
    <AuditWidget15 title="AuditWidget15" />
  </div>
</template>
