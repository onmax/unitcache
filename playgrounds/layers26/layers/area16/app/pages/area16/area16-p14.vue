<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State27()
useHead({ title: `Area16 14 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p14">
    <h1>Area16 page 14 ({{ count }})</h1>
    <Area16Widget63 title="Area16Widget63" />
    <Area16Widget230 title="Area16Widget230" />
    <Area16Widget236 title="Area16Widget236" />
    <Area16Widget18 title="Area16Widget18" />
    <Area16Widget33 title="Area16Widget33" />
  </div>
</template>
