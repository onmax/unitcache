<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State5()
useHead({ title: `Area15 6 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p6">
    <h1>Area15 page 6 ({{ count }})</h1>
    <Area15Widget149 title="Area15Widget149" />
    <Area15Widget208 title="Area15Widget208" />
    <Area15Widget36 title="Area15Widget36" />
    <Area15Widget86 title="Area15Widget86" />
    <Area15Widget59 title="Area15Widget59" />
    <Area15Widget62 title="Area15Widget62" />
  </div>
</template>
