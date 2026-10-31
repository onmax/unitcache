<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State13()
useHead({ title: `Area17 13 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p13">
    <h1>Area17 page 13 ({{ count }})</h1>
    <Area17Widget4 title="Area17Widget4" />
    <Area17Widget13 title="Area17Widget13" />
    <Area17Widget139 title="Area17Widget139" />
    <Area17Widget210 title="Area17Widget210" />
    <Area17Widget87 title="Area17Widget87" />
    <Area17Widget69 title="Area17Widget69" />
  </div>
</template>
