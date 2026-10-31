<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State8()
useHead({ title: `Area15 18 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p18">
    <h1>Area15 page 18 ({{ count }})</h1>
    <Area15Widget214 title="Area15Widget214" />
    <Area15Widget112 title="Area15Widget112" />
    <Area15Widget162 title="Area15Widget162" />
    <Area15Widget100 title="Area15Widget100" />
    <Area15Widget185 title="Area15Widget185" />
  </div>
</template>
