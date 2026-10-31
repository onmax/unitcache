<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState9()
useHead({ title: `Billing 19 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p19">
    <h1>Billing page 19 ({{ count }})</h1>
    <BillingWidget43 title="BillingWidget43" />
    <BillingWidget56 title="BillingWidget56" />
    <BillingWidget229 title="BillingWidget229" />
    <BillingWidget100 title="BillingWidget100" />
    <BillingWidget40 title="BillingWidget40" />
  </div>
</template>
