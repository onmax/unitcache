<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State23()
useHead({ title: `Area19 6 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p6">
    <h1>Area19 page 6 ({{ count }})</h1>
    <Area19Widget90 title="Area19Widget90" />
    <Area19Widget240 title="Area19Widget240" />
    <Area19Widget238 title="Area19Widget238" />
    <Area19Widget191 title="Area19Widget191" />
    <Area19Widget34 title="Area19Widget34" />
    <Area19Widget125 title="Area19Widget125" />
  </div>
</template>
