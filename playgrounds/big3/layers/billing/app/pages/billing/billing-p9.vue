<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState25()
useHead({ title: `Billing 9 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p9">
    <h1>Billing page 9 ({{ count }})</h1>
    <BillingWidget185 title="BillingWidget185" />
    <BillingWidget116 title="BillingWidget116" />
    <BillingWidget72 title="BillingWidget72" />
    <BillingWidget38 title="BillingWidget38" />
    <BillingWidget52 title="BillingWidget52" />
  </div>
</template>
