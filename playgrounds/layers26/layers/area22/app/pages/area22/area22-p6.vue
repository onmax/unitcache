<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State18()
useHead({ title: `Area22 6 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p6">
    <h1>Area22 page 6 ({{ count }})</h1>
    <Area22Widget152 title="Area22Widget152" />
    <Area22Widget210 title="Area22Widget210" />
    <Area22Widget141 title="Area22Widget141" />
    <Area22Widget59 title="Area22Widget59" />
    <Area22Widget224 title="Area22Widget224" />
  </div>
</template>
