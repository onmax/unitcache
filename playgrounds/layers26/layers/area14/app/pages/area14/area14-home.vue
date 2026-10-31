<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State7()
useHead({ title: `Area14 0 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p0">
    <h1>Area14 page 0 ({{ count }})</h1>
    <Area14Widget135 title="Area14Widget135" />
    <Area14Widget92 title="Area14Widget92" />
    <Area14Widget44 title="Area14Widget44" />
    <Area14Widget185 title="Area14Widget185" />
    <Area14Widget116 title="Area14Widget116" />
  </div>
</template>
