<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State27()
useHead({ title: `Area14 16 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p16">
    <h1>Area14 page 16 ({{ count }})</h1>
    <Area14Widget48 title="Area14Widget48" />
    <Area14Widget232 title="Area14Widget232" />
    <Area14Widget39 title="Area14Widget39" />
    <Area14Widget89 title="Area14Widget89" />
    <Area14Widget191 title="Area14Widget191" />
  </div>
</template>
