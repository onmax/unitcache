<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State10()
useHead({ title: `Area13 0 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p0">
    <h1>Area13 page 0 ({{ count }})</h1>
    <Area13Widget141 title="Area13Widget141" />
    <Area13Widget148 title="Area13Widget148" />
    <Area13Widget190 title="Area13Widget190" />
    <Area13Widget122 title="Area13Widget122" />
    <Area13Widget65 title="Area13Widget65" />
    <Area13Widget207 title="Area13Widget207" />
  </div>
</template>
