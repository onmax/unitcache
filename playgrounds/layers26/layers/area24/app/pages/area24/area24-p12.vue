<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State15()
useHead({ title: `Area24 12 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p12">
    <h1>Area24 page 12 ({{ count }})</h1>
    <Area24Widget126 title="Area24Widget126" />
    <Area24Widget36 title="Area24Widget36" />
    <Area24Widget194 title="Area24Widget194" />
    <Area24Widget88 title="Area24Widget88" />
  </div>
</template>
