<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State27()
useHead({ title: `Area22 9 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p9">
    <h1>Area22 page 9 ({{ count }})</h1>
    <Area22Widget12 title="Area22Widget12" />
    <Area22Widget190 title="Area22Widget190" />
    <Area22Widget98 title="Area22Widget98" />
    <Area22Widget54 title="Area22Widget54" />
    <Area22Widget92 title="Area22Widget92" />
  </div>
</template>
