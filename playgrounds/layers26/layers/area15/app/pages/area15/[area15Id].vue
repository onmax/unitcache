<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State3()
useHead({ title: `Area15 1 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p1">
    <h1>Area15 page 1 ({{ count }})</h1>
    <Area15Widget210 title="Area15Widget210" />
    <Area15Widget242 title="Area15Widget242" />
    <Area15Widget72 title="Area15Widget72" />
    <Area15Widget166 title="Area15Widget166" />
    <Area15Widget29 title="Area15Widget29" />
  </div>
</template>
