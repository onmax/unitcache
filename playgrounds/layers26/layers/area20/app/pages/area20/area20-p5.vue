<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State29()
useHead({ title: `Area20 5 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p5">
    <h1>Area20 page 5 ({{ count }})</h1>
    <Area20Widget36 title="Area20Widget36" />
    <Area20Widget138 title="Area20Widget138" />
    <Area20Widget92 title="Area20Widget92" />
    <Area20Widget21 title="Area20Widget21" />
  </div>
</template>
