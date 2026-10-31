<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState2()
useHead({ title: `Billing 7 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p7">
    <h1>Billing page 7 ({{ count }})</h1>
    <BillingWidget38 title="BillingWidget38" />
    <BillingWidget142 title="BillingWidget142" />
    <BillingWidget66 title="BillingWidget66" />
    <BillingWidget198 title="BillingWidget198" />
  </div>
</template>
