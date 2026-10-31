<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState27()
useHead({ title: `Audit 0 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p0">
    <h1>Audit page 0 ({{ count }})</h1>
    <AuditWidget166 title="AuditWidget166" />
    <AuditWidget106 title="AuditWidget106" />
    <AuditWidget248 title="AuditWidget248" />
    <AuditWidget227 title="AuditWidget227" />
    <AuditWidget63 title="AuditWidget63" />
    <AuditWidget23 title="AuditWidget23" />
  </div>
</template>
