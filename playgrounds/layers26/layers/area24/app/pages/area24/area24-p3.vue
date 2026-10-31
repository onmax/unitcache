<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State3()
useHead({ title: `Area24 3 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p3">
    <h1>Area24 page 3 ({{ count }})</h1>
    <Area24Widget230 title="Area24Widget230" />
    <Area24Widget141 title="Area24Widget141" />
    <Area24Widget162 title="Area24Widget162" />
    <Area24Widget207 title="Area24Widget207" />
  </div>
</template>
