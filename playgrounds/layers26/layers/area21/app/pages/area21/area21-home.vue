<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State18()
useHead({ title: `Area21 0 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p0">
    <h1>Area21 page 0 ({{ count }})</h1>
    <Area21Widget16 title="Area21Widget16" />
    <Area21Widget115 title="Area21Widget115" />
    <Area21Widget191 title="Area21Widget191" />
  </div>
</template>
