<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State3()
useHead({ title: `Area13 12 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p12">
    <h1>Area13 page 12 ({{ count }})</h1>
    <Area13Widget13 title="Area13Widget13" />
    <Area13Widget137 title="Area13Widget137" />
    <Area13Widget188 title="Area13Widget188" />
    <Area13Widget6 title="Area13Widget6" />
    <Area13Widget240 title="Area13Widget240" />
  </div>
</template>
