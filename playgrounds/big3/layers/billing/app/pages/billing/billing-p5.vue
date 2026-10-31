<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState14()
useHead({ title: `Billing 5 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p5">
    <h1>Billing page 5 ({{ count }})</h1>
    <BillingWidget15 title="BillingWidget15" />
    <BillingWidget178 title="BillingWidget178" />
    <BillingWidget48 title="BillingWidget48" />
    <BillingWidget93 title="BillingWidget93" />
  </div>
</template>
