<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState22()
useHead({ title: `Audit 11 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p11">
    <h1>Audit page 11 ({{ count }})</h1>
    <AuditWidget106 title="AuditWidget106" />
    <AuditWidget179 title="AuditWidget179" />
    <AuditWidget88 title="AuditWidget88" />
    <AuditWidget10 title="AuditWidget10" />
  </div>
</template>
