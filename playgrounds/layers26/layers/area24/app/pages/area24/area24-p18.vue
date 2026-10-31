<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State27()
useHead({ title: `Area24 18 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p18">
    <h1>Area24 page 18 ({{ count }})</h1>
    <Area24Widget54 title="Area24Widget54" />
    <Area24Widget236 title="Area24Widget236" />
    <Area24Widget123 title="Area24Widget123" />
  </div>
</template>
