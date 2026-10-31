<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State9()
useHead({ title: `Area15 7 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p7">
    <h1>Area15 page 7 ({{ count }})</h1>
    <Area15Widget156 title="Area15Widget156" />
    <Area15Widget68 title="Area15Widget68" />
    <Area15Widget162 title="Area15Widget162" />
  </div>
</template>
