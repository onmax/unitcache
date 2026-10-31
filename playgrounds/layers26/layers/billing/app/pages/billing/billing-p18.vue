<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState3()
useHead({ title: `Billing 18 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p18">
    <h1>Billing page 18 ({{ count }})</h1>
    <BillingWidget124 title="BillingWidget124" />
    <BillingWidget226 title="BillingWidget226" />
    <BillingWidget146 title="BillingWidget146" />
  </div>
</template>
