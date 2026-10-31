<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State4()
useHead({ title: `Area14 7 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p7">
    <h1>Area14 page 7 ({{ count }})</h1>
    <Area14Widget35 title="Area14Widget35" />
    <Area14Widget229 title="Area14Widget229" />
    <Area14Widget195 title="Area14Widget195" />
    <Area14Widget50 title="Area14Widget50" />
    <Area14Widget91 title="Area14Widget91" />
    <Area14Widget217 title="Area14Widget217" />
  </div>
</template>
