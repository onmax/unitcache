<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState15()
useHead({ title: `Audit 12 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p12">
    <h1>Audit page 12 ({{ count }})</h1>
    <AuditWidget181 title="AuditWidget181" />
    <AuditWidget109 title="AuditWidget109" />
    <AuditWidget224 title="AuditWidget224" />
  </div>
</template>
