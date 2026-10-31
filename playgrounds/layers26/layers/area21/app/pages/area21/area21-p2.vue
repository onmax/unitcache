<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State17()
useHead({ title: `Area21 2 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p2">
    <h1>Area21 page 2 ({{ count }})</h1>
    <Area21Widget21 title="Area21Widget21" />
    <Area21Widget221 title="Area21Widget221" />
    <Area21Widget169 title="Area21Widget169" />
  </div>
</template>
