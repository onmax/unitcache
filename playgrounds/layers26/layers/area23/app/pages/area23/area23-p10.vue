<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State28()
useHead({ title: `Area23 10 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p10">
    <h1>Area23 page 10 ({{ count }})</h1>
    <Area23Widget167 title="Area23Widget167" />
    <Area23Widget31 title="Area23Widget31" />
    <Area23Widget211 title="Area23Widget211" />
    <Area23Widget138 title="Area23Widget138" />
    <Area23Widget163 title="Area23Widget163" />
    <Area23Widget109 title="Area23Widget109" />
  </div>
</template>
