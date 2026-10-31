<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State9()
useHead({ title: `Area15 19 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p19">
    <h1>Area15 page 19 ({{ count }})</h1>
    <Area15Widget5 title="Area15Widget5" />
    <Area15Widget168 title="Area15Widget168" />
    <Area15Widget15 title="Area15Widget15" />
    <Area15Widget146 title="Area15Widget146" />
    <Area15Widget221 title="Area15Widget221" />
    <Area15Widget185 title="Area15Widget185" />
  </div>
</template>
