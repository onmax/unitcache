<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState14()
useHead({ title: `Billing 17 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p17">
    <h1>Billing page 17 ({{ count }})</h1>
    <BillingWidget130 title="BillingWidget130" />
    <BillingWidget15 title="BillingWidget15" />
    <BillingWidget158 title="BillingWidget158" />
  </div>
</template>
