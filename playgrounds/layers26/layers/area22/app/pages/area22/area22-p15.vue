<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State19()
useHead({ title: `Area22 15 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p15">
    <h1>Area22 page 15 ({{ count }})</h1>
    <Area22Widget145 title="Area22Widget145" />
    <Area22Widget132 title="Area22Widget132" />
    <Area22Widget80 title="Area22Widget80" />
  </div>
</template>
