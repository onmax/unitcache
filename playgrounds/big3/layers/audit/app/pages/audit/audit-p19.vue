<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState13()
useHead({ title: `Audit 19 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p19">
    <h1>Audit page 19 ({{ count }})</h1>
    <AuditWidget141 title="AuditWidget141" />
    <AuditWidget165 title="AuditWidget165" />
    <AuditWidget58 title="AuditWidget58" />
    <AuditWidget224 title="AuditWidget224" />
  </div>
</template>
