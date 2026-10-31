<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State19()
useHead({ title: `Area17 3 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p3">
    <h1>Area17 page 3 ({{ count }})</h1>
    <Area17Widget175 title="Area17Widget175" />
    <Area17Widget136 title="Area17Widget136" />
    <Area17Widget29 title="Area17Widget29" />
  </div>
</template>
