<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State5()
useHead({ title: `Area13 3 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p3">
    <h1>Area13 page 3 ({{ count }})</h1>
    <Area13Widget134 title="Area13Widget134" />
    <Area13Widget14 title="Area13Widget14" />
    <Area13Widget203 title="Area13Widget203" />
  </div>
</template>
