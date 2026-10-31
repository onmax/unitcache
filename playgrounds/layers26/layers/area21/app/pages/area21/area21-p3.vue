<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State15()
useHead({ title: `Area21 3 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p3">
    <h1>Area21 page 3 ({{ count }})</h1>
    <Area21Widget180 title="Area21Widget180" />
    <Area21Widget24 title="Area21Widget24" />
    <Area21Widget71 title="Area21Widget71" />
    <Area21Widget226 title="Area21Widget226" />
  </div>
</template>
