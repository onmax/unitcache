<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State18()
useHead({ title: `Area19 17 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p17">
    <h1>Area19 page 17 ({{ count }})</h1>
    <Area19Widget128 title="Area19Widget128" />
    <Area19Widget161 title="Area19Widget161" />
    <Area19Widget129 title="Area19Widget129" />
  </div>
</template>
