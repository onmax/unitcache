<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State18()
useHead({ title: `Area19 14 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p14">
    <h1>Area19 page 14 ({{ count }})</h1>
    <Area19Widget55 title="Area19Widget55" />
    <Area19Widget192 title="Area19Widget192" />
    <Area19Widget31 title="Area19Widget31" />
    <Area19Widget13 title="Area19Widget13" />
    <Area19Widget78 title="Area19Widget78" />
  </div>
</template>
