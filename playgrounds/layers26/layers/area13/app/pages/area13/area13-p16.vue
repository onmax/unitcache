<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State27()
useHead({ title: `Area13 16 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p16">
    <h1>Area13 page 16 ({{ count }})</h1>
    <Area13Widget235 title="Area13Widget235" />
    <Area13Widget187 title="Area13Widget187" />
    <Area13Widget33 title="Area13Widget33" />
    <Area13Widget80 title="Area13Widget80" />
  </div>
</template>
