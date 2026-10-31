<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State25()
useHead({ title: `Area23 2 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p2">
    <h1>Area23 page 2 ({{ count }})</h1>
    <Area23Widget41 title="Area23Widget41" />
    <Area23Widget185 title="Area23Widget185" />
    <Area23Widget232 title="Area23Widget232" />
    <Area23Widget69 title="Area23Widget69" />
  </div>
</template>
