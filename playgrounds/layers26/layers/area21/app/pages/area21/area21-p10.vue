<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State1()
useHead({ title: `Area21 10 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p10">
    <h1>Area21 page 10 ({{ count }})</h1>
    <Area21Widget12 title="Area21Widget12" />
    <Area21Widget79 title="Area21Widget79" />
    <Area21Widget192 title="Area21Widget192" />
    <Area21Widget57 title="Area21Widget57" />
    <Area21Widget52 title="Area21Widget52" />
    <Area21Widget9 title="Area21Widget9" />
  </div>
</template>
