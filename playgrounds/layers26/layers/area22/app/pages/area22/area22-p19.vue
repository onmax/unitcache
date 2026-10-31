<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State12()
useHead({ title: `Area22 19 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p19">
    <h1>Area22 page 19 ({{ count }})</h1>
    <Area22Widget202 title="Area22Widget202" />
    <Area22Widget163 title="Area22Widget163" />
    <Area22Widget94 title="Area22Widget94" />
  </div>
</template>
