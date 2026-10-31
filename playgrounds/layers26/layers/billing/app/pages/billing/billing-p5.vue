<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState13()
useHead({ title: `Billing 5 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p5">
    <h1>Billing page 5 ({{ count }})</h1>
    <BillingWidget109 title="BillingWidget109" />
    <BillingWidget79 title="BillingWidget79" />
    <BillingWidget158 title="BillingWidget158" />
    <BillingWidget160 title="BillingWidget160" />
  </div>
</template>
