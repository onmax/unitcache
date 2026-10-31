<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState24()
useHead({ title: `Audit 10 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p10">
    <h1>Audit page 10 ({{ count }})</h1>
    <AuditWidget194 title="AuditWidget194" />
    <AuditWidget224 title="AuditWidget224" />
    <AuditWidget147 title="AuditWidget147" />
    <AuditWidget18 title="AuditWidget18" />
    <AuditWidget124 title="AuditWidget124" />
  </div>
</template>
