<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State13()
useHead({ title: `Area23 5 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p5">
    <h1>Area23 page 5 ({{ count }})</h1>
    <Area23Widget208 title="Area23Widget208" />
    <Area23Widget140 title="Area23Widget140" />
    <Area23Widget12 title="Area23Widget12" />
    <Area23Widget202 title="Area23Widget202" />
    <Area23Widget93 title="Area23Widget93" />
    <Area23Widget194 title="Area23Widget194" />
  </div>
</template>
