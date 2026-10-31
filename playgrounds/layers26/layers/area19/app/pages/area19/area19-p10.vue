<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State29()
useHead({ title: `Area19 10 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p10">
    <h1>Area19 page 10 ({{ count }})</h1>
    <Area19Widget62 title="Area19Widget62" />
    <Area19Widget20 title="Area19Widget20" />
    <Area19Widget211 title="Area19Widget211" />
    <Area19Widget124 title="Area19Widget124" />
    <Area19Widget61 title="Area19Widget61" />
    <Area19Widget239 title="Area19Widget239" />
  </div>
</template>
