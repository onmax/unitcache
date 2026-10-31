<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState5()
useHead({ title: `Billing 4 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p4">
    <h1>Billing page 4 ({{ count }})</h1>
    <BillingWidget174 title="BillingWidget174" />
    <BillingWidget198 title="BillingWidget198" />
    <BillingWidget197 title="BillingWidget197" />
    <BillingWidget59 title="BillingWidget59" />
    <BillingWidget116 title="BillingWidget116" />
  </div>
</template>
