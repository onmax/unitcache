<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState29()
useHead({ title: `Billing 7 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p7">
    <h1>Billing page 7 ({{ count }})</h1>
    <BillingWidget69 title="BillingWidget69" />
    <BillingWidget130 title="BillingWidget130" />
    <BillingWidget158 title="BillingWidget158" />
    <BillingWidget73 title="BillingWidget73" />
    <BillingWidget204 title="BillingWidget204" />
    <BillingWidget151 title="BillingWidget151" />
  </div>
</template>
