<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State17()
useHead({ title: `Area24 11 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p11">
    <h1>Area24 page 11 ({{ count }})</h1>
    <Area24Widget38 title="Area24Widget38" />
    <Area24Widget88 title="Area24Widget88" />
    <Area24Widget235 title="Area24Widget235" />
    <Area24Widget12 title="Area24Widget12" />
  </div>
</template>
