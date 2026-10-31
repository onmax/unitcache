<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State15()
useHead({ title: `Area13 4 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p4">
    <h1>Area13 page 4 ({{ count }})</h1>
    <Area13Widget107 title="Area13Widget107" />
    <Area13Widget196 title="Area13Widget196" />
    <Area13Widget140 title="Area13Widget140" />
    <Area13Widget241 title="Area13Widget241" />
  </div>
</template>
