<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State9()
useHead({ title: `Area18 14 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p14">
    <h1>Area18 page 14 ({{ count }})</h1>
    <Area18Widget123 title="Area18Widget123" />
    <Area18Widget16 title="Area18Widget16" />
    <Area18Widget136 title="Area18Widget136" />
    <Area18Widget155 title="Area18Widget155" />
  </div>
</template>
