<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State7()
useHead({ title: `Area19 9 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p9">
    <h1>Area19 page 9 ({{ count }})</h1>
    <Area19Widget166 title="Area19Widget166" />
    <Area19Widget37 title="Area19Widget37" />
    <Area19Widget191 title="Area19Widget191" />
  </div>
</template>
