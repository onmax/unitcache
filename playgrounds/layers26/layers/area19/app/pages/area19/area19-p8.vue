<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State7()
useHead({ title: `Area19 8 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p8">
    <h1>Area19 page 8 ({{ count }})</h1>
    <Area19Widget151 title="Area19Widget151" />
    <Area19Widget123 title="Area19Widget123" />
    <Area19Widget117 title="Area19Widget117" />
    <Area19Widget10 title="Area19Widget10" />
    <Area19Widget41 title="Area19Widget41" />
  </div>
</template>
