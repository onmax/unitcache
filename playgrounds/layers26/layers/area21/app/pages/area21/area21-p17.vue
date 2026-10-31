<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State29()
useHead({ title: `Area21 17 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p17">
    <h1>Area21 page 17 ({{ count }})</h1>
    <Area21Widget121 title="Area21Widget121" />
    <Area21Widget141 title="Area21Widget141" />
    <Area21Widget224 title="Area21Widget224" />
    <Area21Widget14 title="Area21Widget14" />
  </div>
</template>
