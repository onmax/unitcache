<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State22()
useHead({ title: `Area22 2 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p2">
    <h1>Area22 page 2 ({{ count }})</h1>
    <Area22Widget150 title="Area22Widget150" />
    <Area22Widget199 title="Area22Widget199" />
    <Area22Widget198 title="Area22Widget198" />
  </div>
</template>
