<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State4()
useHead({ title: `Area22 17 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p17">
    <h1>Area22 page 17 ({{ count }})</h1>
    <Area22Widget220 title="Area22Widget220" />
    <Area22Widget171 title="Area22Widget171" />
    <Area22Widget82 title="Area22Widget82" />
    <Area22Widget208 title="Area22Widget208" />
  </div>
</template>
