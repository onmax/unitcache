<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['audit-guard'] })
const route = useRoute()
const { count } = useAuditState25()
useHead({ title: `Audit 18 ${route.params.auditId ?? ''}` })
</script>

<template>
  <div class="page audit-p18">
    <h1>Audit page 18 ({{ count }})</h1>
    <AuditWidget144 title="AuditWidget144" />
    <AuditWidget181 title="AuditWidget181" />
    <AuditWidget240 title="AuditWidget240" />
    <AuditWidget229 title="AuditWidget229" />
  </div>
</template>
