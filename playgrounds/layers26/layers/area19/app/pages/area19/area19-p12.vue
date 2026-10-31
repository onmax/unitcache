<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State27()
useHead({ title: `Area19 12 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p12">
    <h1>Area19 page 12 ({{ count }})</h1>
    <Area19Widget204 title="Area19Widget204" />
    <Area19Widget209 title="Area19Widget209" />
    <Area19Widget41 title="Area19Widget41" />
  </div>
</template>
