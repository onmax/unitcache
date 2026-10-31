<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State14()
useHead({ title: `Area22 14 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p14">
    <h1>Area22 page 14 ({{ count }})</h1>
    <Area22Widget36 title="Area22Widget36" />
    <Area22Widget232 title="Area22Widget232" />
    <Area22Widget10 title="Area22Widget10" />
  </div>
</template>
