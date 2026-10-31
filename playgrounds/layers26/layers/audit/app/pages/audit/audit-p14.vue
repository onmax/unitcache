<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState2()
useHead({ title: `Audit 14 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p14">
    <h1>Audit page 14 ({{ count }})</h1>
    <AuditWidget119 title="AuditWidget119" />
    <AuditWidget46 title="AuditWidget46" />
    <AuditWidget127 title="AuditWidget127" />
    <AuditWidget49 title="AuditWidget49" />
    <AuditWidget145 title="AuditWidget145" />
    <AuditWidget169 title="AuditWidget169" />
  </div>
</template>
