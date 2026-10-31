<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State4()
useHead({ title: `Area21 8 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p8">
    <h1>Area21 page 8 ({{ count }})</h1>
    <Area21Widget241 title="Area21Widget241" />
    <Area21Widget128 title="Area21Widget128" />
    <Area21Widget229 title="Area21Widget229" />
    <Area21Widget59 title="Area21Widget59" />
    <Area21Widget218 title="Area21Widget218" />
    <Area21Widget82 title="Area21Widget82" />
  </div>
</template>
