<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State29()
useHead({ title: `Area23 1 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p1">
    <h1>Area23 page 1 ({{ count }})</h1>
    <Area23Widget162 title="Area23Widget162" />
    <Area23Widget131 title="Area23Widget131" />
    <Area23Widget4 title="Area23Widget4" />
  </div>
</template>
