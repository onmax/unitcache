<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState26()
useHead({ title: `Billing 4 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p4">
    <h1>Billing page 4 ({{ count }})</h1>
    <BillingWidget218 title="BillingWidget218" />
    <BillingWidget249 title="BillingWidget249" />
    <BillingWidget111 title="BillingWidget111" />
    <BillingWidget16 title="BillingWidget16" />
    <BillingWidget27 title="BillingWidget27" />
  </div>
</template>
