<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State11()
useHead({ title: `Area22 18 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p18">
    <h1>Area22 page 18 ({{ count }})</h1>
    <Area22Widget128 title="Area22Widget128" />
    <Area22Widget59 title="Area22Widget59" />
    <Area22Widget204 title="Area22Widget204" />
    <Area22Widget184 title="Area22Widget184" />
    <Area22Widget161 title="Area22Widget161" />
  </div>
</template>
