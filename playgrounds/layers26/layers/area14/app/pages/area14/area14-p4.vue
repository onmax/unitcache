<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State24()
useHead({ title: `Area14 4 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p4">
    <h1>Area14 page 4 ({{ count }})</h1>
    <Area14Widget214 title="Area14Widget214" />
    <Area14Widget236 title="Area14Widget236" />
    <Area14Widget195 title="Area14Widget195" />
    <Area14Widget160 title="Area14Widget160" />
    <Area14Widget156 title="Area14Widget156" />
  </div>
</template>
