<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State3()
useHead({ title: `Area22 5 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p5">
    <h1>Area22 page 5 ({{ count }})</h1>
    <Area22Widget219 title="Area22Widget219" />
    <Area22Widget115 title="Area22Widget115" />
    <Area22Widget225 title="Area22Widget225" />
    <Area22Widget72 title="Area22Widget72" />
    <Area22Widget4 title="Area22Widget4" />
  </div>
</template>
