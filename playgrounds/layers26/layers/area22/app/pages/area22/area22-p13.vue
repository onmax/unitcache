<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State7()
useHead({ title: `Area22 13 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p13">
    <h1>Area22 page 13 ({{ count }})</h1>
    <Area22Widget20 title="Area22Widget20" />
    <Area22Widget11 title="Area22Widget11" />
    <Area22Widget33 title="Area22Widget33" />
  </div>
</template>
