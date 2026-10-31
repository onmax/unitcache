<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State9()
useHead({ title: `Area13 6 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p6">
    <h1>Area13 page 6 ({{ count }})</h1>
    <Area13Widget241 title="Area13Widget241" />
    <Area13Widget41 title="Area13Widget41" />
    <Area13Widget94 title="Area13Widget94" />
    <Area13Widget51 title="Area13Widget51" />
  </div>
</template>
