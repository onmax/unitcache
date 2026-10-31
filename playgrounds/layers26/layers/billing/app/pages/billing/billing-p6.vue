<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState5()
useHead({ title: `Billing 6 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p6">
    <h1>Billing page 6 ({{ count }})</h1>
    <BillingWidget61 title="BillingWidget61" />
    <BillingWidget143 title="BillingWidget143" />
    <BillingWidget178 title="BillingWidget178" />
    <BillingWidget116 title="BillingWidget116" />
  </div>
</template>
