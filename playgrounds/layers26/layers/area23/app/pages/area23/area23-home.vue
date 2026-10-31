<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State19()
useHead({ title: `Area23 0 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p0">
    <h1>Area23 page 0 ({{ count }})</h1>
    <Area23Widget80 title="Area23Widget80" />
    <Area23Widget1 title="Area23Widget1" />
    <Area23Widget228 title="Area23Widget228" />
    <Area23Widget215 title="Area23Widget215" />
  </div>
</template>
