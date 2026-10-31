<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State18()
useHead({ title: `Area19 3 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p3">
    <h1>Area19 page 3 ({{ count }})</h1>
    <Area19Widget51 title="Area19Widget51" />
    <Area19Widget147 title="Area19Widget147" />
    <Area19Widget31 title="Area19Widget31" />
    <Area19Widget94 title="Area19Widget94" />
  </div>
</template>
