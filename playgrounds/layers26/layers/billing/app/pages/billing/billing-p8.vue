<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState25()
useHead({ title: `Billing 8 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p8">
    <h1>Billing page 8 ({{ count }})</h1>
    <BillingWidget69 title="BillingWidget69" />
    <BillingWidget127 title="BillingWidget127" />
    <BillingWidget71 title="BillingWidget71" />
    <BillingWidget190 title="BillingWidget190" />
    <BillingWidget75 title="BillingWidget75" />
    <BillingWidget97 title="BillingWidget97" />
  </div>
</template>
