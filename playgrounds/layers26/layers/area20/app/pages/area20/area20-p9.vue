<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State26()
useHead({ title: `Area20 9 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p9">
    <h1>Area20 page 9 ({{ count }})</h1>
    <Area20Widget239 title="Area20Widget239" />
    <Area20Widget108 title="Area20Widget108" />
    <Area20Widget23 title="Area20Widget23" />
    <Area20Widget35 title="Area20Widget35" />
    <Area20Widget129 title="Area20Widget129" />
    <Area20Widget65 title="Area20Widget65" />
  </div>
</template>
