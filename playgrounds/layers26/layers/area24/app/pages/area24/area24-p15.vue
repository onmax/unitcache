<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State0()
useHead({ title: `Area24 15 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p15">
    <h1>Area24 page 15 ({{ count }})</h1>
    <Area24Widget163 title="Area24Widget163" />
    <Area24Widget172 title="Area24Widget172" />
    <Area24Widget206 title="Area24Widget206" />
    <Area24Widget135 title="Area24Widget135" />
    <Area24Widget234 title="Area24Widget234" />
  </div>
</template>
