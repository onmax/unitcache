<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State1()
useHead({ title: `Area21 14 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p14">
    <h1>Area21 page 14 ({{ count }})</h1>
    <Area21Widget120 title="Area21Widget120" />
    <Area21Widget66 title="Area21Widget66" />
    <Area21Widget42 title="Area21Widget42" />
  </div>
</template>
