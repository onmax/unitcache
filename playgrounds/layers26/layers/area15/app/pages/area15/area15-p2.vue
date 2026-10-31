<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State8()
useHead({ title: `Area15 2 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p2">
    <h1>Area15 page 2 ({{ count }})</h1>
    <Area15Widget192 title="Area15Widget192" />
    <Area15Widget121 title="Area15Widget121" />
    <Area15Widget141 title="Area15Widget141" />
    <Area15Widget155 title="Area15Widget155" />
    <Area15Widget154 title="Area15Widget154" />
    <Area15Widget104 title="Area15Widget104" />
  </div>
</template>
