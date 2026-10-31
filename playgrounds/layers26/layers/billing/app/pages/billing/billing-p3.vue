<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState9()
useHead({ title: `Billing 3 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p3">
    <h1>Billing page 3 ({{ count }})</h1>
    <BillingWidget200 title="BillingWidget200" />
    <BillingWidget33 title="BillingWidget33" />
    <BillingWidget73 title="BillingWidget73" />
    <BillingWidget230 title="BillingWidget230" />
    <BillingWidget233 title="BillingWidget233" />
  </div>
</template>
