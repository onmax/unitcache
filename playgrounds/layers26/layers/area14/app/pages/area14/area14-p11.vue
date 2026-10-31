<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State2()
useHead({ title: `Area14 11 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p11">
    <h1>Area14 page 11 ({{ count }})</h1>
    <Area14Widget10 title="Area14Widget10" />
    <Area14Widget217 title="Area14Widget217" />
    <Area14Widget139 title="Area14Widget139" />
    <Area14Widget220 title="Area14Widget220" />
    <Area14Widget12 title="Area14Widget12" />
    <Area14Widget53 title="Area14Widget53" />
  </div>
</template>
