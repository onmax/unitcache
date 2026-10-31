<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState16()
useHead({ title: `Billing 2 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p2">
    <h1>Billing page 2 ({{ count }})</h1>
    <BillingWidget220 title="BillingWidget220" />
    <BillingWidget221 title="BillingWidget221" />
    <BillingWidget75 title="BillingWidget75" />
    <BillingWidget165 title="BillingWidget165" />
    <BillingWidget36 title="BillingWidget36" />
    <BillingWidget169 title="BillingWidget169" />
  </div>
</template>
