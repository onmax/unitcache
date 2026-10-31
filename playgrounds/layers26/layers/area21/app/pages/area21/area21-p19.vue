<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State5()
useHead({ title: `Area21 19 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p19">
    <h1>Area21 page 19 ({{ count }})</h1>
    <Area21Widget154 title="Area21Widget154" />
    <Area21Widget120 title="Area21Widget120" />
    <Area21Widget155 title="Area21Widget155" />
  </div>
</template>
