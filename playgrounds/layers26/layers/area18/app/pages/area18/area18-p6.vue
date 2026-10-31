<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State19()
useHead({ title: `Area18 6 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p6">
    <h1>Area18 page 6 ({{ count }})</h1>
    <Area18Widget87 title="Area18Widget87" />
    <Area18Widget37 title="Area18Widget37" />
    <Area18Widget172 title="Area18Widget172" />
    <Area18Widget54 title="Area18Widget54" />
    <Area18Widget114 title="Area18Widget114" />
    <Area18Widget244 title="Area18Widget244" />
  </div>
</template>
