<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState10()
useHead({ title: `Billing 16 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p16">
    <h1>Billing page 16 ({{ count }})</h1>
    <BillingWidget166 title="BillingWidget166" />
    <BillingWidget63 title="BillingWidget63" />
    <BillingWidget205 title="BillingWidget205" />
    <BillingWidget97 title="BillingWidget97" />
    <BillingWidget28 title="BillingWidget28" />
    <BillingWidget21 title="BillingWidget21" />
  </div>
</template>
