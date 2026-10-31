<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState22()
useHead({ title: `Billing 1 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p1">
    <h1>Billing page 1 ({{ count }})</h1>
    <BillingWidget126 title="BillingWidget126" />
    <BillingWidget13 title="BillingWidget13" />
    <BillingWidget209 title="BillingWidget209" />
    <BillingWidget153 title="BillingWidget153" />
    <BillingWidget78 title="BillingWidget78" />
  </div>
</template>
