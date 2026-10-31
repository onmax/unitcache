<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState14()
useHead({ title: `Billing 13 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p13">
    <h1>Billing page 13 ({{ count }})</h1>
    <BillingWidget178 title="BillingWidget178" />
    <BillingWidget76 title="BillingWidget76" />
    <BillingWidget156 title="BillingWidget156" />
    <BillingWidget166 title="BillingWidget166" />
  </div>
</template>
