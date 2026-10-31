<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State10()
useHead({ title: `Area24 17 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p17">
    <h1>Area24 page 17 ({{ count }})</h1>
    <Area24Widget65 title="Area24Widget65" />
    <Area24Widget1 title="Area24Widget1" />
    <Area24Widget241 title="Area24Widget241" />
  </div>
</template>
