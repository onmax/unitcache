<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State7()
useHead({ title: `Area13 15 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p15">
    <h1>Area13 page 15 ({{ count }})</h1>
    <Area13Widget75 title="Area13Widget75" />
    <Area13Widget175 title="Area13Widget175" />
    <Area13Widget212 title="Area13Widget212" />
  </div>
</template>
