<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State4()
useHead({ title: `Area21 5 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p5">
    <h1>Area21 page 5 ({{ count }})</h1>
    <Area21Widget110 title="Area21Widget110" />
    <Area21Widget149 title="Area21Widget149" />
    <Area21Widget137 title="Area21Widget137" />
  </div>
</template>
