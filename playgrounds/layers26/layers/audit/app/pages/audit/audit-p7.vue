<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState15()
useHead({ title: `Audit 7 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p7">
    <h1>Audit page 7 ({{ count }})</h1>
    <AuditWidget178 title="AuditWidget178" />
    <AuditWidget122 title="AuditWidget122" />
    <AuditWidget65 title="AuditWidget65" />
  </div>
</template>
