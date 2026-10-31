<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State9()
useHead({ title: `Area18 18 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p18">
    <h1>Area18 page 18 ({{ count }})</h1>
    <Area18Widget49 title="Area18Widget49" />
    <Area18Widget243 title="Area18Widget243" />
    <Area18Widget179 title="Area18Widget179" />
    <Area18Widget140 title="Area18Widget140" />
  </div>
</template>
