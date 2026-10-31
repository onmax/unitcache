<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State9()
useHead({ title: `Area19 5 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p5">
    <h1>Area19 page 5 ({{ count }})</h1>
    <Area19Widget226 title="Area19Widget226" />
    <Area19Widget19 title="Area19Widget19" />
    <Area19Widget122 title="Area19Widget122" />
  </div>
</template>
