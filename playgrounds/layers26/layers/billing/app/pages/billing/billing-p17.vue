<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState18()
useHead({ title: `Billing 17 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p17">
    <h1>Billing page 17 ({{ count }})</h1>
    <BillingWidget95 title="BillingWidget95" />
    <BillingWidget60 title="BillingWidget60" />
    <BillingWidget239 title="BillingWidget239" />
    <BillingWidget112 title="BillingWidget112" />
    <BillingWidget1 title="BillingWidget1" />
  </div>
</template>
