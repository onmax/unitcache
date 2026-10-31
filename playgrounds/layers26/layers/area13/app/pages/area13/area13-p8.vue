<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State14()
useHead({ title: `Area13 8 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p8">
    <h1>Area13 page 8 ({{ count }})</h1>
    <Area13Widget156 title="Area13Widget156" />
    <Area13Widget123 title="Area13Widget123" />
    <Area13Widget148 title="Area13Widget148" />
    <Area13Widget202 title="Area13Widget202" />
    <Area13Widget165 title="Area13Widget165" />
  </div>
</template>
