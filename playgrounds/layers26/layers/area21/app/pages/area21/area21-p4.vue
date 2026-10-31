<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State22()
useHead({ title: `Area21 4 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p4">
    <h1>Area21 page 4 ({{ count }})</h1>
    <Area21Widget112 title="Area21Widget112" />
    <Area21Widget44 title="Area21Widget44" />
    <Area21Widget163 title="Area21Widget163" />
    <Area21Widget1 title="Area21Widget1" />
  </div>
</template>
