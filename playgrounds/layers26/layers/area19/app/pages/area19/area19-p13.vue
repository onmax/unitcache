<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State5()
useHead({ title: `Area19 13 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p13">
    <h1>Area19 page 13 ({{ count }})</h1>
    <Area19Widget237 title="Area19Widget237" />
    <Area19Widget89 title="Area19Widget89" />
    <Area19Widget224 title="Area19Widget224" />
    <Area19Widget194 title="Area19Widget194" />
  </div>
</template>
