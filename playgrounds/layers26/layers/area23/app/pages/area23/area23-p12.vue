<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State18()
useHead({ title: `Area23 12 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p12">
    <h1>Area23 page 12 ({{ count }})</h1>
    <Area23Widget244 title="Area23Widget244" />
    <Area23Widget129 title="Area23Widget129" />
    <Area23Widget68 title="Area23Widget68" />
  </div>
</template>
