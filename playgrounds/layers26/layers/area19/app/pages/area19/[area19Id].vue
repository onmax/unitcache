<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State14()
useHead({ title: `Area19 1 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p1">
    <h1>Area19 page 1 ({{ count }})</h1>
    <Area19Widget204 title="Area19Widget204" />
    <Area19Widget24 title="Area19Widget24" />
    <Area19Widget233 title="Area19Widget233" />
  </div>
</template>
