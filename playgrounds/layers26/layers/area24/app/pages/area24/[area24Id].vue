<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State1()
useHead({ title: `Area24 1 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p1">
    <h1>Area24 page 1 ({{ count }})</h1>
    <Area24Widget240 title="Area24Widget240" />
    <Area24Widget31 title="Area24Widget31" />
    <Area24Widget227 title="Area24Widget227" />
    <Area24Widget159 title="Area24Widget159" />
  </div>
</template>
