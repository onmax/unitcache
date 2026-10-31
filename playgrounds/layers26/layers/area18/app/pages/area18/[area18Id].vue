<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State16()
useHead({ title: `Area18 1 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p1">
    <h1>Area18 page 1 ({{ count }})</h1>
    <Area18Widget189 title="Area18Widget189" />
    <Area18Widget227 title="Area18Widget227" />
    <Area18Widget35 title="Area18Widget35" />
    <Area18Widget234 title="Area18Widget234" />
    <Area18Widget194 title="Area18Widget194" />
    <Area18Widget209 title="Area18Widget209" />
  </div>
</template>
