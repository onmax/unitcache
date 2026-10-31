<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState2()
useHead({ title: `Billing 6 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p6">
    <h1>Billing page 6 ({{ count }})</h1>
    <BillingWidget174 title="BillingWidget174" />
    <BillingWidget178 title="BillingWidget178" />
    <BillingWidget191 title="BillingWidget191" />
    <BillingWidget232 title="BillingWidget232" />
    <BillingWidget216 title="BillingWidget216" />
  </div>
</template>
