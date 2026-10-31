<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State26()
useHead({ title: `Area19 11 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p11">
    <h1>Area19 page 11 ({{ count }})</h1>
    <Area19Widget30 title="Area19Widget30" />
    <Area19Widget99 title="Area19Widget99" />
    <Area19Widget215 title="Area19Widget215" />
    <Area19Widget16 title="Area19Widget16" />
    <Area19Widget55 title="Area19Widget55" />
    <Area19Widget165 title="Area19Widget165" />
  </div>
</template>
