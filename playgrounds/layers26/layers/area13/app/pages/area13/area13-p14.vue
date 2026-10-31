<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State13()
useHead({ title: `Area13 14 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p14">
    <h1>Area13 page 14 ({{ count }})</h1>
    <Area13Widget139 title="Area13Widget139" />
    <Area13Widget63 title="Area13Widget63" />
    <Area13Widget128 title="Area13Widget128" />
    <Area13Widget155 title="Area13Widget155" />
  </div>
</template>
