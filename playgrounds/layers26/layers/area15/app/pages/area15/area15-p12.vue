<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State17()
useHead({ title: `Area15 12 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p12">
    <h1>Area15 page 12 ({{ count }})</h1>
    <Area15Widget4 title="Area15Widget4" />
    <Area15Widget197 title="Area15Widget197" />
    <Area15Widget76 title="Area15Widget76" />
  </div>
</template>
