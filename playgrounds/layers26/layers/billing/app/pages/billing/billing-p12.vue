<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState2()
useHead({ title: `Billing 12 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p12">
    <h1>Billing page 12 ({{ count }})</h1>
    <BillingWidget168 title="BillingWidget168" />
    <BillingWidget207 title="BillingWidget207" />
    <BillingWidget70 title="BillingWidget70" />
  </div>
</template>
