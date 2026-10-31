<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State22()
useHead({ title: `Area17 19 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p19">
    <h1>Area17 page 19 ({{ count }})</h1>
    <Area17Widget31 title="Area17Widget31" />
    <Area17Widget32 title="Area17Widget32" />
    <Area17Widget53 title="Area17Widget53" />
    <Area17Widget135 title="Area17Widget135" />
    <Area17Widget46 title="Area17Widget46" />
    <Area17Widget232 title="Area17Widget232" />
  </div>
</template>
