<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State14()
useHead({ title: `Area23 15 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p15">
    <h1>Area23 page 15 ({{ count }})</h1>
    <Area23Widget171 title="Area23Widget171" />
    <Area23Widget49 title="Area23Widget49" />
    <Area23Widget10 title="Area23Widget10" />
    <Area23Widget125 title="Area23Widget125" />
    <Area23Widget216 title="Area23Widget216" />
    <Area23Widget2 title="Area23Widget2" />
  </div>
</template>
