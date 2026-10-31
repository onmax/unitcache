<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State26()
useHead({ title: `Area23 8 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p8">
    <h1>Area23 page 8 ({{ count }})</h1>
    <Area23Widget1 title="Area23Widget1" />
    <Area23Widget71 title="Area23Widget71" />
    <Area23Widget53 title="Area23Widget53" />
    <Area23Widget230 title="Area23Widget230" />
    <Area23Widget235 title="Area23Widget235" />
  </div>
</template>
