<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area19-guard'] })
const route = useRoute()
const { count } = useArea19State28()
useHead({ title: `Area19 16 ${route.params.area19Id ?? ''}` })
</script>

<template>
  <div class="page area19-p16">
    <h1>Area19 page 16 ({{ count }})</h1>
    <Area19Widget165 title="Area19Widget165" />
    <Area19Widget172 title="Area19Widget172" />
    <Area19Widget79 title="Area19Widget79" />
  </div>
</template>
