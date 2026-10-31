<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State4()
useHead({ title: `Area22 4 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p4">
    <h1>Area22 page 4 ({{ count }})</h1>
    <Area22Widget26 title="Area22Widget26" />
    <Area22Widget134 title="Area22Widget134" />
    <Area22Widget164 title="Area22Widget164" />
  </div>
</template>
