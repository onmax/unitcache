<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State10()
useHead({ title: `Area18 16 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p16">
    <h1>Area18 page 16 ({{ count }})</h1>
    <Area18Widget82 title="Area18Widget82" />
    <Area18Widget195 title="Area18Widget195" />
    <Area18Widget212 title="Area18Widget212" />
    <Area18Widget123 title="Area18Widget123" />
    <Area18Widget105 title="Area18Widget105" />
  </div>
</template>
