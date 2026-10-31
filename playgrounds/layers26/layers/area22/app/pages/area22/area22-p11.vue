<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State19()
useHead({ title: `Area22 11 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p11">
    <h1>Area22 page 11 ({{ count }})</h1>
    <Area22Widget239 title="Area22Widget239" />
    <Area22Widget192 title="Area22Widget192" />
    <Area22Widget109 title="Area22Widget109" />
    <Area22Widget108 title="Area22Widget108" />
    <Area22Widget143 title="Area22Widget143" />
  </div>
</template>
