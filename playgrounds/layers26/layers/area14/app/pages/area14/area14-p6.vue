<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State4()
useHead({ title: `Area14 6 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p6">
    <h1>Area14 page 6 ({{ count }})</h1>
    <Area14Widget173 title="Area14Widget173" />
    <Area14Widget149 title="Area14Widget149" />
    <Area14Widget67 title="Area14Widget67" />
    <Area14Widget130 title="Area14Widget130" />
  </div>
</template>
