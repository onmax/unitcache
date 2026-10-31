<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState29()
useHead({ title: `Billing 16 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p16">
    <h1>Billing page 16 ({{ count }})</h1>
    <BillingWidget234 title="BillingWidget234" />
    <BillingWidget189 title="BillingWidget189" />
    <BillingWidget226 title="BillingWidget226" />
    <BillingWidget244 title="BillingWidget244" />
    <BillingWidget231 title="BillingWidget231" />
  </div>
</template>
