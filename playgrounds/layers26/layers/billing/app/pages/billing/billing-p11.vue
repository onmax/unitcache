<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState11()
useHead({ title: `Billing 11 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p11">
    <h1>Billing page 11 ({{ count }})</h1>
    <BillingWidget207 title="BillingWidget207" />
    <BillingWidget66 title="BillingWidget66" />
    <BillingWidget154 title="BillingWidget154" />
    <BillingWidget151 title="BillingWidget151" />
    <BillingWidget205 title="BillingWidget205" />
  </div>
</template>
