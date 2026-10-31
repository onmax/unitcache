<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State18()
useHead({ title: `Area17 12 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p12">
    <h1>Area17 page 12 ({{ count }})</h1>
    <Area17Widget0 title="Area17Widget0" />
    <Area17Widget234 title="Area17Widget234" />
    <Area17Widget75 title="Area17Widget75" />
  </div>
</template>
