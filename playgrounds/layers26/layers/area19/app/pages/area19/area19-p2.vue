<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State9()
useHead({ title: `Area19 2 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p2">
    <h1>Area19 page 2 ({{ count }})</h1>
    <Area19Widget184 title="Area19Widget184" />
    <Area19Widget151 title="Area19Widget151" />
    <Area19Widget166 title="Area19Widget166" />
  </div>
</template>
