<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State14()
useHead({ title: `Area19 18 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p18">
    <h1>Area19 page 18 ({{ count }})</h1>
    <Area19Widget189 title="Area19Widget189" />
    <Area19Widget234 title="Area19Widget234" />
    <Area19Widget148 title="Area19Widget148" />
    <Area19Widget86 title="Area19Widget86" />
    <Area19Widget167 title="Area19Widget167" />
    <Area19Widget206 title="Area19Widget206" />
  </div>
</template>
