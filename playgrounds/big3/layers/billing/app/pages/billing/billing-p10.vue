<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState7()
useHead({ title: `Billing 10 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p10">
    <h1>Billing page 10 ({{ count }})</h1>
    <BillingWidget54 title="BillingWidget54" />
    <BillingWidget42 title="BillingWidget42" />
    <BillingWidget176 title="BillingWidget176" />
  </div>
</template>
