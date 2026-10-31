<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState18()
useHead({ title: `Billing 3 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p3">
    <h1>Billing page 3 ({{ count }})</h1>
    <BillingWidget130 title="BillingWidget130" />
    <BillingWidget57 title="BillingWidget57" />
    <BillingWidget179 title="BillingWidget179" />
    <BillingWidget25 title="BillingWidget25" />
    <BillingWidget8 title="BillingWidget8" />
  </div>
</template>
