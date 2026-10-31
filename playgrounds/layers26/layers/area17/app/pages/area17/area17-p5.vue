<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State1()
useHead({ title: `Area17 5 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p5">
    <h1>Area17 page 5 ({{ count }})</h1>
    <Area17Widget106 title="Area17Widget106" />
    <Area17Widget137 title="Area17Widget137" />
    <Area17Widget83 title="Area17Widget83" />
    <Area17Widget63 title="Area17Widget63" />
  </div>
</template>
