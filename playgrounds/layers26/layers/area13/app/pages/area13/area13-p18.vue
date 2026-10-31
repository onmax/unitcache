<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State11()
useHead({ title: `Area13 18 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p18">
    <h1>Area13 page 18 ({{ count }})</h1>
    <Area13Widget16 title="Area13Widget16" />
    <Area13Widget27 title="Area13Widget27" />
    <Area13Widget118 title="Area13Widget118" />
    <Area13Widget210 title="Area13Widget210" />
    <Area13Widget155 title="Area13Widget155" />
  </div>
</template>
