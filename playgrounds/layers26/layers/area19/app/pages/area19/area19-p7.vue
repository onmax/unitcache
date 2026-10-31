<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State19()
useHead({ title: `Area19 7 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p7">
    <h1>Area19 page 7 ({{ count }})</h1>
    <Area19Widget217 title="Area19Widget217" />
    <Area19Widget144 title="Area19Widget144" />
    <Area19Widget67 title="Area19Widget67" />
    <Area19Widget0 title="Area19Widget0" />
  </div>
</template>
