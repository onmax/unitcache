<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State21()
useHead({ title: `Area14 14 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p14">
    <h1>Area14 page 14 ({{ count }})</h1>
    <Area14Widget242 title="Area14Widget242" />
    <Area14Widget92 title="Area14Widget92" />
    <Area14Widget156 title="Area14Widget156" />
    <Area14Widget204 title="Area14Widget204" />
    <Area14Widget188 title="Area14Widget188" />
    <Area14Widget14 title="Area14Widget14" />
  </div>
</template>
