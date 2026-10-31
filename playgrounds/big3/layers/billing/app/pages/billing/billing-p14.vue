<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['billing-guard'] })
const route = useRoute()
const { count } = useBillingState17()
useHead({ title: `Billing 14 ${route.params.billingId ?? ''}` })
</script>

<template>
  <div class="page billing-p14">
    <h1>Billing page 14 ({{ count }})</h1>
    <BillingWidget96 title="BillingWidget96" />
    <BillingWidget244 title="BillingWidget244" />
    <BillingWidget199 title="BillingWidget199" />
  </div>
</template>
