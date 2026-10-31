<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State19()
useHead({ title: `Area13 1 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p1">
    <h1>Area13 page 1 ({{ count }})</h1>
    <Area13Widget160 title="Area13Widget160" />
    <Area13Widget9 title="Area13Widget9" />
    <Area13Widget2 title="Area13Widget2" />
  </div>
</template>
