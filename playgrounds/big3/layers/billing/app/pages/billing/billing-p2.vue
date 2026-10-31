<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState14()
useHead({ title: `Billing 2 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p2">
    <h1>Billing page 2 ({{ count }})</h1>
    <BillingWidget201 title="BillingWidget201" />
    <BillingWidget171 title="BillingWidget171" />
    <BillingWidget139 title="BillingWidget139" />
    <BillingWidget212 title="BillingWidget212" />
    <BillingWidget246 title="BillingWidget246" />
    <BillingWidget249 title="BillingWidget249" />
  </div>
</template>
