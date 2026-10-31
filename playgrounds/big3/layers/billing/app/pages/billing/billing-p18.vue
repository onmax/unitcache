<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState23()
useHead({ title: `Billing 18 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p18">
    <h1>Billing page 18 ({{ count }})</h1>
    <BillingWidget168 title="BillingWidget168" />
    <BillingWidget114 title="BillingWidget114" />
    <BillingWidget128 title="BillingWidget128" />
  </div>
</template>
