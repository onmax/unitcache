<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState12()
useHead({ title: `Billing 0 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p0">
    <h1>Billing page 0 ({{ count }})</h1>
    <BillingWidget237 title="BillingWidget237" />
    <BillingWidget31 title="BillingWidget31" />
    <BillingWidget34 title="BillingWidget34" />
    <BillingWidget11 title="BillingWidget11" />
    <BillingWidget40 title="BillingWidget40" />
  </div>
</template>
