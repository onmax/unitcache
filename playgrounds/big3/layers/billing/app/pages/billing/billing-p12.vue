<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState2()
useHead({ title: `Billing 12 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p12">
    <h1>Billing page 12 ({{ count }})</h1>
    <BillingWidget213 title="BillingWidget213" />
    <BillingWidget218 title="BillingWidget218" />
    <BillingWidget239 title="BillingWidget239" />
    <BillingWidget134 title="BillingWidget134" />
    <BillingWidget20 title="BillingWidget20" />
    <BillingWidget77 title="BillingWidget77" />
  </div>
</template>
