<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState18()
useHead({ title: `Billing 13 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p13">
    <h1>Billing page 13 ({{ count }})</h1>
    <BillingWidget118 title="BillingWidget118" />
    <BillingWidget156 title="BillingWidget156" />
    <BillingWidget47 title="BillingWidget47" />
    <BillingWidget237 title="BillingWidget237" />
  </div>
</template>
