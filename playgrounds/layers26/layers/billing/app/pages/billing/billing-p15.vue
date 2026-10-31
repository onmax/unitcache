<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState12()
useHead({ title: `Billing 15 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p15">
    <h1>Billing page 15 ({{ count }})</h1>
    <BillingWidget46 title="BillingWidget46" />
    <BillingWidget7 title="BillingWidget7" />
    <BillingWidget52 title="BillingWidget52" />
    <BillingWidget191 title="BillingWidget191" />
    <BillingWidget189 title="BillingWidget189" />
  </div>
</template>
