<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State6()
useHead({ title: `Area13 17 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p17">
    <h1>Area13 page 17 ({{ count }})</h1>
    <Area13Widget31 title="Area13Widget31" />
    <Area13Widget59 title="Area13Widget59" />
    <Area13Widget154 title="Area13Widget154" />
    <Area13Widget55 title="Area13Widget55" />
    <Area13Widget215 title="Area13Widget215" />
    <Area13Widget244 title="Area13Widget244" />
  </div>
</template>
