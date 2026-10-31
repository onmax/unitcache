<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State22()
useHead({ title: `Area19 0 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p0">
    <h1>Area19 page 0 ({{ count }})</h1>
    <Area19Widget179 title="Area19Widget179" />
    <Area19Widget210 title="Area19Widget210" />
    <Area19Widget154 title="Area19Widget154" />
    <Area19Widget91 title="Area19Widget91" />
    <Area19Widget56 title="Area19Widget56" />
    <Area19Widget78 title="Area19Widget78" />
  </div>
</template>
