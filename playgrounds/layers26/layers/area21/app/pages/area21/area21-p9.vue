<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State6()
useHead({ title: `Area21 9 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p9">
    <h1>Area21 page 9 ({{ count }})</h1>
    <Area21Widget69 title="Area21Widget69" />
    <Area21Widget239 title="Area21Widget239" />
    <Area21Widget84 title="Area21Widget84" />
  </div>
</template>
