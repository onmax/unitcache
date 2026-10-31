<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State5()
useHead({ title: `Area14 2 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p2">
    <h1>Area14 page 2 ({{ count }})</h1>
    <Area14Widget236 title="Area14Widget236" />
    <Area14Widget107 title="Area14Widget107" />
    <Area14Widget169 title="Area14Widget169" />
    <Area14Widget138 title="Area14Widget138" />
  </div>
</template>
