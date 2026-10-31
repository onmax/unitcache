<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State26()
useHead({ title: `Area17 8 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p8">
    <h1>Area17 page 8 ({{ count }})</h1>
    <Area17Widget130 title="Area17Widget130" />
    <Area17Widget245 title="Area17Widget245" />
    <Area17Widget179 title="Area17Widget179" />
    <Area17Widget118 title="Area17Widget118" />
  </div>
</template>
