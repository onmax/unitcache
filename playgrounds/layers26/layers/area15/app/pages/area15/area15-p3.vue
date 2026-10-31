<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State13()
useHead({ title: `Area15 3 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p3">
    <h1>Area15 page 3 ({{ count }})</h1>
    <Area15Widget229 title="Area15Widget229" />
    <Area15Widget63 title="Area15Widget63" />
    <Area15Widget136 title="Area15Widget136" />
  </div>
</template>
