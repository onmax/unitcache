<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State28()
useHead({ title: `Area14 10 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p10">
    <h1>Area14 page 10 ({{ count }})</h1>
    <Area14Widget183 title="Area14Widget183" />
    <Area14Widget151 title="Area14Widget151" />
    <Area14Widget108 title="Area14Widget108" />
    <Area14Widget219 title="Area14Widget219" />
    <Area14Widget52 title="Area14Widget52" />
    <Area14Widget2 title="Area14Widget2" />
  </div>
</template>
