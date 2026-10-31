<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState0()
useHead({ title: `Billing 1 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p1">
    <h1>Billing page 1 ({{ count }})</h1>
    <BillingWidget84 title="BillingWidget84" />
    <BillingWidget172 title="BillingWidget172" />
    <BillingWidget219 title="BillingWidget219" />
    <BillingWidget126 title="BillingWidget126" />
  </div>
</template>
