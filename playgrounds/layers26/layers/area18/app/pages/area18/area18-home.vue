<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State6()
useHead({ title: `Area18 0 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p0">
    <h1>Area18 page 0 ({{ count }})</h1>
    <Area18Widget167 title="Area18Widget167" />
    <Area18Widget52 title="Area18Widget52" />
    <Area18Widget141 title="Area18Widget141" />
    <Area18Widget32 title="Area18Widget32" />
  </div>
</template>
