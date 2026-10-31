<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState25()
useHead({ title: `Billing 9 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p9">
    <h1>Billing page 9 ({{ count }})</h1>
    <BillingWidget20 title="BillingWidget20" />
    <BillingWidget182 title="BillingWidget182" />
    <BillingWidget122 title="BillingWidget122" />
    <BillingWidget150 title="BillingWidget150" />
  </div>
</template>
