<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State19()
useHead({ title: `Area22 7 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p7">
    <h1>Area22 page 7 ({{ count }})</h1>
    <Area22Widget226 title="Area22Widget226" />
    <Area22Widget73 title="Area22Widget73" />
    <Area22Widget47 title="Area22Widget47" />
    <Area22Widget122 title="Area22Widget122" />
    <Area22Widget96 title="Area22Widget96" />
    <Area22Widget137 title="Area22Widget137" />
  </div>
</template>
