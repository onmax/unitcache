<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State21()
useHead({ title: `Area22 8 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p8">
    <h1>Area22 page 8 ({{ count }})</h1>
    <Area22Widget194 title="Area22Widget194" />
    <Area22Widget163 title="Area22Widget163" />
    <Area22Widget71 title="Area22Widget71" />
    <Area22Widget169 title="Area22Widget169" />
    <Area22Widget127 title="Area22Widget127" />
    <Area22Widget181 title="Area22Widget181" />
  </div>
</template>
