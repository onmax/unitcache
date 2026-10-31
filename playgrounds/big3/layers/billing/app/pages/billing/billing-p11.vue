<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState13()
useHead({ title: `Billing 11 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p11">
    <h1>Billing page 11 ({{ count }})</h1>
    <BillingWidget221 title="BillingWidget221" />
    <BillingWidget232 title="BillingWidget232" />
    <BillingWidget41 title="BillingWidget41" />
    <BillingWidget187 title="BillingWidget187" />
    <BillingWidget113 title="BillingWidget113" />
    <BillingWidget115 title="BillingWidget115" />
  </div>
</template>
