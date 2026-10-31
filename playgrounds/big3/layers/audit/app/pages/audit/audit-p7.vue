<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState0()
useHead({ title: `Audit 7 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p7">
    <h1>Audit page 7 ({{ count }})</h1>
    <AuditWidget231 title="AuditWidget231" />
    <AuditWidget118 title="AuditWidget118" />
    <AuditWidget224 title="AuditWidget224" />
  </div>
</template>
