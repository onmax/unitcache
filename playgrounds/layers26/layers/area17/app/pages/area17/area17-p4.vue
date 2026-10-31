<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State24()
useHead({ title: `Area17 4 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p4">
    <h1>Area17 page 4 ({{ count }})</h1>
    <Area17Widget224 title="Area17Widget224" />
    <Area17Widget192 title="Area17Widget192" />
    <Area17Widget101 title="Area17Widget101" />
    <Area17Widget46 title="Area17Widget46" />
    <Area17Widget205 title="Area17Widget205" />
    <Area17Widget73 title="Area17Widget73" />
  </div>
</template>
