<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State9()
useHead({ title: `Area17 18 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p18">
    <h1>Area17 page 18 ({{ count }})</h1>
    <Area17Widget37 title="Area17Widget37" />
    <Area17Widget81 title="Area17Widget81" />
    <Area17Widget62 title="Area17Widget62" />
  </div>
</template>
