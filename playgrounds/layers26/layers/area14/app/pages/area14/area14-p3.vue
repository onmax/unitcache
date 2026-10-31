<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State8()
useHead({ title: `Area14 3 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p3">
    <h1>Area14 page 3 ({{ count }})</h1>
    <Area14Widget90 title="Area14Widget90" />
    <Area14Widget16 title="Area14Widget16" />
    <Area14Widget100 title="Area14Widget100" />
    <Area14Widget238 title="Area14Widget238" />
    <Area14Widget28 title="Area14Widget28" />
  </div>
</template>
