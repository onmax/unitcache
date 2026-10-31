<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State2()
useHead({ title: `Area13 7 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p7">
    <h1>Area13 page 7 ({{ count }})</h1>
    <Area13Widget159 title="Area13Widget159" />
    <Area13Widget89 title="Area13Widget89" />
    <Area13Widget17 title="Area13Widget17" />
    <Area13Widget64 title="Area13Widget64" />
  </div>
</template>
