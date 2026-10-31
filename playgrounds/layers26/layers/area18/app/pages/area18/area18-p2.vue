<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State20()
useHead({ title: `Area18 2 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p2">
    <h1>Area18 page 2 ({{ count }})</h1>
    <Area18Widget234 title="Area18Widget234" />
    <Area18Widget212 title="Area18Widget212" />
    <Area18Widget69 title="Area18Widget69" />
  </div>
</template>
