<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State22()
useHead({ title: `Area15 0 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p0">
    <h1>Area15 page 0 ({{ count }})</h1>
    <Area15Widget104 title="Area15Widget104" />
    <Area15Widget20 title="Area15Widget20" />
    <Area15Widget155 title="Area15Widget155" />
    <Area15Widget114 title="Area15Widget114" />
    <Area15Widget172 title="Area15Widget172" />
  </div>
</template>
