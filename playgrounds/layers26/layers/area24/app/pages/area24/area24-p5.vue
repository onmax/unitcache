<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State27()
useHead({ title: `Area24 5 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p5">
    <h1>Area24 page 5 ({{ count }})</h1>
    <Area24Widget161 title="Area24Widget161" />
    <Area24Widget54 title="Area24Widget54" />
    <Area24Widget111 title="Area24Widget111" />
    <Area24Widget27 title="Area24Widget27" />
    <Area24Widget211 title="Area24Widget211" />
    <Area24Widget34 title="Area24Widget34" />
  </div>
</template>
