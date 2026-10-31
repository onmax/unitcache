<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State8()
useHead({ title: `Area14 17 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p17">
    <h1>Area14 page 17 ({{ count }})</h1>
    <Area14Widget157 title="Area14Widget157" />
    <Area14Widget41 title="Area14Widget41" />
    <Area14Widget97 title="Area14Widget97" />
    <Area14Widget220 title="Area14Widget220" />
  </div>
</template>
