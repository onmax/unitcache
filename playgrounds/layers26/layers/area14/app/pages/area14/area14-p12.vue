<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State15()
useHead({ title: `Area14 12 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p12">
    <h1>Area14 page 12 ({{ count }})</h1>
    <Area14Widget29 title="Area14Widget29" />
    <Area14Widget133 title="Area14Widget133" />
    <Area14Widget79 title="Area14Widget79" />
  </div>
</template>
