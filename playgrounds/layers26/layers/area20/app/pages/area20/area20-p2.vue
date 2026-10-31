<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State1()
useHead({ title: `Area20 2 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p2">
    <h1>Area20 page 2 ({{ count }})</h1>
    <Area20Widget7 title="Area20Widget7" />
    <Area20Widget102 title="Area20Widget102" />
    <Area20Widget166 title="Area20Widget166" />
  </div>
</template>
