<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State1()
useHead({ title: `Area22 1 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p1">
    <h1>Area22 page 1 ({{ count }})</h1>
    <Area22Widget17 title="Area22Widget17" />
    <Area22Widget194 title="Area22Widget194" />
    <Area22Widget240 title="Area22Widget240" />
    <Area22Widget86 title="Area22Widget86" />
    <Area22Widget65 title="Area22Widget65" />
    <Area22Widget130 title="Area22Widget130" />
  </div>
</template>
