<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State13()
useHead({ title: `Area23 16 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p16">
    <h1>Area23 page 16 ({{ count }})</h1>
    <Area23Widget54 title="Area23Widget54" />
    <Area23Widget58 title="Area23Widget58" />
    <Area23Widget14 title="Area23Widget14" />
    <Area23Widget65 title="Area23Widget65" />
  </div>
</template>
