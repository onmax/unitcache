<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State20()
useHead({ title: `Area16 3 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p3">
    <h1>Area16 page 3 ({{ count }})</h1>
    <Area16Widget121 title="Area16Widget121" />
    <Area16Widget46 title="Area16Widget46" />
    <Area16Widget211 title="Area16Widget211" />
  </div>
</template>
