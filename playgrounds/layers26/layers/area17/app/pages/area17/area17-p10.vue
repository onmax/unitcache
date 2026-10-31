<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State15()
useHead({ title: `Area17 10 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p10">
    <h1>Area17 page 10 ({{ count }})</h1>
    <Area17Widget214 title="Area17Widget214" />
    <Area17Widget144 title="Area17Widget144" />
    <Area17Widget161 title="Area17Widget161" />
    <Area17Widget28 title="Area17Widget28" />
    <Area17Widget79 title="Area17Widget79" />
    <Area17Widget83 title="Area17Widget83" />
  </div>
</template>
