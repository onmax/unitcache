<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State27()
useHead({ title: `Area13 13 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p13">
    <h1>Area13 page 13 ({{ count }})</h1>
    <Area13Widget44 title="Area13Widget44" />
    <Area13Widget12 title="Area13Widget12" />
    <Area13Widget232 title="Area13Widget232" />
    <Area13Widget217 title="Area13Widget217" />
    <Area13Widget218 title="Area13Widget218" />
    <Area13Widget1 title="Area13Widget1" />
  </div>
</template>
