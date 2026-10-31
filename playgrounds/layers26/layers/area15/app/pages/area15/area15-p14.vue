<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State18()
useHead({ title: `Area15 14 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p14">
    <h1>Area15 page 14 ({{ count }})</h1>
    <Area15Widget235 title="Area15Widget235" />
    <Area15Widget198 title="Area15Widget198" />
    <Area15Widget46 title="Area15Widget46" />
  </div>
</template>
