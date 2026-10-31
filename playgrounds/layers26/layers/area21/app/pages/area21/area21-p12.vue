<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State14()
useHead({ title: `Area21 12 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p12">
    <h1>Area21 page 12 ({{ count }})</h1>
    <Area21Widget60 title="Area21Widget60" />
    <Area21Widget110 title="Area21Widget110" />
    <Area21Widget113 title="Area21Widget113" />
    <Area21Widget219 title="Area21Widget219" />
  </div>
</template>
