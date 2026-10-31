<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState10()
useHead({ title: `Billing 15 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p15">
    <h1>Billing page 15 ({{ count }})</h1>
    <BillingWidget198 title="BillingWidget198" />
    <BillingWidget117 title="BillingWidget117" />
    <BillingWidget22 title="BillingWidget22" />
    <BillingWidget135 title="BillingWidget135" />
    <BillingWidget81 title="BillingWidget81" />
    <BillingWidget75 title="BillingWidget75" />
  </div>
</template>
