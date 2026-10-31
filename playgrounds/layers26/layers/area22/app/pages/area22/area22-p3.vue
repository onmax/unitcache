<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State29()
useHead({ title: `Area22 3 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p3">
    <h1>Area22 page 3 ({{ count }})</h1>
    <Area22Widget152 title="Area22Widget152" />
    <Area22Widget122 title="Area22Widget122" />
    <Area22Widget92 title="Area22Widget92" />
    <Area22Widget45 title="Area22Widget45" />
    <Area22Widget226 title="Area22Widget226" />
    <Area22Widget70 title="Area22Widget70" />
  </div>
</template>
