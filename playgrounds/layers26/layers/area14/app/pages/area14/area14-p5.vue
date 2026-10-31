<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State21()
useHead({ title: `Area14 5 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p5">
    <h1>Area14 page 5 ({{ count }})</h1>
    <Area14Widget3 title="Area14Widget3" />
    <Area14Widget78 title="Area14Widget78" />
    <Area14Widget14 title="Area14Widget14" />
  </div>
</template>
