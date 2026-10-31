<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState6()
useHead({ title: `Audit 2 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p2">
    <h1>Audit page 2 ({{ count }})</h1>
    <AuditWidget129 title="AuditWidget129" />
    <AuditWidget177 title="AuditWidget177" />
    <AuditWidget228 title="AuditWidget228" />
    <AuditWidget19 title="AuditWidget19" />
    <AuditWidget84 title="AuditWidget84" />
    <AuditWidget219 title="AuditWidget219" />
  </div>
</template>
