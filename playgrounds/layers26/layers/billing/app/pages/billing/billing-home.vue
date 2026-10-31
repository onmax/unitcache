<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState7()
useHead({ title: `Billing 0 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p0">
    <h1>Billing page 0 ({{ count }})</h1>
    <BillingWidget146 title="BillingWidget146" />
    <BillingWidget209 title="BillingWidget209" />
    <BillingWidget161 title="BillingWidget161" />
  </div>
</template>
