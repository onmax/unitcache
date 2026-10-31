<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State7()
useHead({ title: `Area19 15 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p15">
    <h1>Area19 page 15 ({{ count }})</h1>
    <Area19Widget210 title="Area19Widget210" />
    <Area19Widget16 title="Area19Widget16" />
    <Area19Widget63 title="Area19Widget63" />
    <Area19Widget97 title="Area19Widget97" />
  </div>
</template>
