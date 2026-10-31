<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State21()
useHead({ title: `Area21 6 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p6">
    <h1>Area21 page 6 ({{ count }})</h1>
    <Area21Widget230 title="Area21Widget230" />
    <Area21Widget224 title="Area21Widget224" />
    <Area21Widget145 title="Area21Widget145" />
    <Area21Widget168 title="Area21Widget168" />
    <Area21Widget146 title="Area21Widget146" />
    <Area21Widget106 title="Area21Widget106" />
  </div>
</template>
