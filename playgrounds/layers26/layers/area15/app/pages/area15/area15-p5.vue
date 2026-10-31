<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State13()
useHead({ title: `Area15 5 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p5">
    <h1>Area15 page 5 ({{ count }})</h1>
    <Area15Widget121 title="Area15Widget121" />
    <Area15Widget124 title="Area15Widget124" />
    <Area15Widget170 title="Area15Widget170" />
    <Area15Widget34 title="Area15Widget34" />
  </div>
</template>
