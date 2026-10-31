<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState9()
useHead({ title: `Billing 10 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p10">
    <h1>Billing page 10 ({{ count }})</h1>
    <BillingWidget12 title="BillingWidget12" />
    <BillingWidget243 title="BillingWidget243" />
    <BillingWidget225 title="BillingWidget225" />
    <BillingWidget9 title="BillingWidget9" />
    <BillingWidget177 title="BillingWidget177" />
    <BillingWidget165 title="BillingWidget165" />
  </div>
</template>
