<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State15()
useHead({ title: `Area13 11 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p11">
    <h1>Area13 page 11 ({{ count }})</h1>
    <Area13Widget67 title="Area13Widget67" />
    <Area13Widget17 title="Area13Widget17" />
    <Area13Widget112 title="Area13Widget112" />
    <Area13Widget205 title="Area13Widget205" />
  </div>
</template>
