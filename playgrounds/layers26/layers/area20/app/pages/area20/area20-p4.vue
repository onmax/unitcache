<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State6()
useHead({ title: `Area20 4 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p4">
    <h1>Area20 page 4 ({{ count }})</h1>
    <Area20Widget88 title="Area20Widget88" />
    <Area20Widget8 title="Area20Widget8" />
    <Area20Widget41 title="Area20Widget41" />
    <Area20Widget186 title="Area20Widget186" />
    <Area20Widget95 title="Area20Widget95" />
    <Area20Widget63 title="Area20Widget63" />
  </div>
</template>
