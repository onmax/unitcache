<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State15()
useHead({ title: `Area22 16 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p16">
    <h1>Area22 page 16 ({{ count }})</h1>
    <Area22Widget210 title="Area22Widget210" />
    <Area22Widget27 title="Area22Widget27" />
    <Area22Widget226 title="Area22Widget226" />
    <Area22Widget92 title="Area22Widget92" />
    <Area22Widget155 title="Area22Widget155" />
  </div>
</template>
