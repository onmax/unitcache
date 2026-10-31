<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State2()
useHead({ title: `Area22 10 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p10">
    <h1>Area22 page 10 ({{ count }})</h1>
    <Area22Widget131 title="Area22Widget131" />
    <Area22Widget15 title="Area22Widget15" />
    <Area22Widget34 title="Area22Widget34" />
    <Area22Widget116 title="Area22Widget116" />
  </div>
</template>
