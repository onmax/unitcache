<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State15()
useHead({ title: `Area19 4 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p4">
    <h1>Area19 page 4 ({{ count }})</h1>
    <Area19Widget53 title="Area19Widget53" />
    <Area19Widget66 title="Area19Widget66" />
    <Area19Widget22 title="Area19Widget22" />
    <Area19Widget193 title="Area19Widget193" />
  </div>
</template>
