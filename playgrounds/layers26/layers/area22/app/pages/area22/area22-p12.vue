<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State16()
useHead({ title: `Area22 12 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p12">
    <h1>Area22 page 12 ({{ count }})</h1>
    <Area22Widget197 title="Area22Widget197" />
    <Area22Widget156 title="Area22Widget156" />
    <Area22Widget125 title="Area22Widget125" />
    <Area22Widget241 title="Area22Widget241" />
    <Area22Widget245 title="Area22Widget245" />
  </div>
</template>
