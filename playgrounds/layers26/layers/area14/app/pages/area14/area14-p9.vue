<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State8()
useHead({ title: `Area14 9 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p9">
    <h1>Area14 page 9 ({{ count }})</h1>
    <Area14Widget154 title="Area14Widget154" />
    <Area14Widget146 title="Area14Widget146" />
    <Area14Widget148 title="Area14Widget148" />
    <Area14Widget64 title="Area14Widget64" />
  </div>
</template>
