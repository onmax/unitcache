<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State19()
useHead({ title: `Area21 7 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p7">
    <h1>Area21 page 7 ({{ count }})</h1>
    <Area21Widget31 title="Area21Widget31" />
    <Area21Widget193 title="Area21Widget193" />
    <Area21Widget240 title="Area21Widget240" />
    <Area21Widget177 title="Area21Widget177" />
  </div>
</template>
