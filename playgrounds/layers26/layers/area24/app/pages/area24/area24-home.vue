<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State20()
useHead({ title: `Area24 0 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p0">
    <h1>Area24 page 0 ({{ count }})</h1>
    <Area24Widget188 title="Area24Widget188" />
    <Area24Widget226 title="Area24Widget226" />
    <Area24Widget200 title="Area24Widget200" />
    <Area24Widget73 title="Area24Widget73" />
  </div>
</template>
