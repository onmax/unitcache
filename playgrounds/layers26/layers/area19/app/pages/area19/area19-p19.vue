<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State10()
useHead({ title: `Area19 19 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p19">
    <h1>Area19 page 19 ({{ count }})</h1>
    <Area19Widget92 title="Area19Widget92" />
    <Area19Widget170 title="Area19Widget170" />
    <Area19Widget247 title="Area19Widget247" />
    <Area19Widget0 title="Area19Widget0" />
    <Area19Widget28 title="Area19Widget28" />
    <Area19Widget186 title="Area19Widget186" />
  </div>
</template>
