<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State29()
useHead({ title: `Area13 10 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p10">
    <h1>Area13 page 10 ({{ count }})</h1>
    <Area13Widget168 title="Area13Widget168" />
    <Area13Widget175 title="Area13Widget175" />
    <Area13Widget64 title="Area13Widget64" />
    <Area13Widget244 title="Area13Widget244" />
  </div>
</template>
