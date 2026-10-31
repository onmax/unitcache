<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState12()
useHead({ title: `Billing 14 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p14">
    <h1>Billing page 14 ({{ count }})</h1>
    <BillingWidget158 title="BillingWidget158" />
    <BillingWidget191 title="BillingWidget191" />
    <BillingWidget107 title="BillingWidget107" />
    <BillingWidget88 title="BillingWidget88" />
    <BillingWidget82 title="BillingWidget82" />
    <BillingWidget148 title="BillingWidget148" />
  </div>
</template>
