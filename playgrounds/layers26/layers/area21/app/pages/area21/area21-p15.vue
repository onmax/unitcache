<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State29()
useHead({ title: `Area21 15 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p15">
    <h1>Area21 page 15 ({{ count }})</h1>
    <Area21Widget80 title="Area21Widget80" />
    <Area21Widget103 title="Area21Widget103" />
    <Area21Widget174 title="Area21Widget174" />
  </div>
</template>
