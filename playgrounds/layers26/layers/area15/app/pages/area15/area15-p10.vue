<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State24()
useHead({ title: `Area15 10 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p10">
    <h1>Area15 page 10 ({{ count }})</h1>
    <Area15Widget248 title="Area15Widget248" />
    <Area15Widget114 title="Area15Widget114" />
    <Area15Widget246 title="Area15Widget246" />
    <Area15Widget51 title="Area15Widget51" />
    <Area15Widget175 title="Area15Widget175" />
  </div>
</template>
