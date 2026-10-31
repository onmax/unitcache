<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State15()
useHead({ title: `Area18 10 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p10">
    <h1>Area18 page 10 ({{ count }})</h1>
    <Area18Widget4 title="Area18Widget4" />
    <Area18Widget19 title="Area18Widget19" />
    <Area18Widget87 title="Area18Widget87" />
    <Area18Widget202 title="Area18Widget202" />
  </div>
</template>
