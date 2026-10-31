<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State21()
useHead({ title: `Area13 5 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p5">
    <h1>Area13 page 5 ({{ count }})</h1>
    <Area13Widget108 title="Area13Widget108" />
    <Area13Widget81 title="Area13Widget81" />
    <Area13Widget116 title="Area13Widget116" />
  </div>
</template>
