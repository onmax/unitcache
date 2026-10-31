<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State0()
useHead({ title: `Area13 19 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p19">
    <h1>Area13 page 19 ({{ count }})</h1>
    <Area13Widget193 title="Area13Widget193" />
    <Area13Widget104 title="Area13Widget104" />
    <Area13Widget214 title="Area13Widget214" />
    <Area13Widget115 title="Area13Widget115" />
    <Area13Widget54 title="Area13Widget54" />
  </div>
</template>
