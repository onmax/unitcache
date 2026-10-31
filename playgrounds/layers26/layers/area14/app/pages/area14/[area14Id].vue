<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State8()
useHead({ title: `Area14 1 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p1">
    <h1>Area14 page 1 ({{ count }})</h1>
    <Area14Widget19 title="Area14Widget19" />
    <Area14Widget154 title="Area14Widget154" />
    <Area14Widget151 title="Area14Widget151" />
    <Area14Widget208 title="Area14Widget208" />
    <Area14Widget222 title="Area14Widget222" />
    <Area14Widget61 title="Area14Widget61" />
  </div>
</template>
