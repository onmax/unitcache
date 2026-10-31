<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State26()
useHead({ title: `Area13 9 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p9">
    <h1>Area13 page 9 ({{ count }})</h1>
    <Area13Widget136 title="Area13Widget136" />
    <Area13Widget221 title="Area13Widget221" />
    <Area13Widget129 title="Area13Widget129" />
  </div>
</template>
