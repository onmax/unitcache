<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State28()
useHead({ title: `Area15 11 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p11">
    <h1>Area15 page 11 ({{ count }})</h1>
    <Area15Widget166 title="Area15Widget166" />
    <Area15Widget200 title="Area15Widget200" />
    <Area15Widget125 title="Area15Widget125" />
  </div>
</template>
