<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState10()
useHead({ title: `Audit 9 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p9">
    <h1>Audit page 9 ({{ count }})</h1>
    <AuditWidget128 title="AuditWidget128" />
    <AuditWidget105 title="AuditWidget105" />
    <AuditWidget106 title="AuditWidget106" />
    <AuditWidget9 title="AuditWidget9" />
  </div>
</template>
