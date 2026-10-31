<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State5()
useHead({ title: `Area18 17 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p17">
    <h1>Area18 page 17 ({{ count }})</h1>
    <Area18Widget246 title="Area18Widget246" />
    <Area18Widget223 title="Area18Widget223" />
    <Area18Widget82 title="Area18Widget82" />
    <Area18Widget120 title="Area18Widget120" />
  </div>
</template>
