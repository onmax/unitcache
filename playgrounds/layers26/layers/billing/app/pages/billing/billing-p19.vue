<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState27()
useHead({ title: `Billing 19 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p19">
    <h1>Billing page 19 ({{ count }})</h1>
    <BillingWidget30 title="BillingWidget30" />
    <BillingWidget168 title="BillingWidget168" />
    <BillingWidget219 title="BillingWidget219" />
  </div>
</template>
