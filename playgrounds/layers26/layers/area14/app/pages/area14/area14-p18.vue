<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State17()
useHead({ title: `Area14 18 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p18">
    <h1>Area14 page 18 ({{ count }})</h1>
    <Area14Widget169 title="Area14Widget169" />
    <Area14Widget125 title="Area14Widget125" />
    <Area14Widget89 title="Area14Widget89" />
  </div>
</template>
