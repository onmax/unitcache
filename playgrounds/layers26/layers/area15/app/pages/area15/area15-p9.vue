<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State1()
useHead({ title: `Area15 9 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p9">
    <h1>Area15 page 9 ({{ count }})</h1>
    <Area15Widget125 title="Area15Widget125" />
    <Area15Widget84 title="Area15Widget84" />
    <Area15Widget163 title="Area15Widget163" />
    <Area15Widget203 title="Area15Widget203" />
    <Area15Widget196 title="Area15Widget196" />
  </div>
</template>
