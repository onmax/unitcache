<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State0()
useHead({ title: `Area20 3 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p3">
    <h1>Area20 page 3 ({{ count }})</h1>
    <Area20Widget124 title="Area20Widget124" />
    <Area20Widget125 title="Area20Widget125" />
    <Area20Widget134 title="Area20Widget134" />
  </div>
</template>
