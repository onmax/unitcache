<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState28()
useHead({ title: `Billing 8 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p8">
    <h1>Billing page 8 ({{ count }})</h1>
    <BillingWidget122 title="BillingWidget122" />
    <BillingWidget87 title="BillingWidget87" />
    <BillingWidget101 title="BillingWidget101" />
    <BillingWidget157 title="BillingWidget157" />
    <BillingWidget164 title="BillingWidget164" />
  </div>
</template>
