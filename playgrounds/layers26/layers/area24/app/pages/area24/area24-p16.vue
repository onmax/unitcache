<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State28()
useHead({ title: `Area24 16 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p16">
    <h1>Area24 page 16 ({{ count }})</h1>
    <Area24Widget184 title="Area24Widget184" />
    <Area24Widget11 title="Area24Widget11" />
    <Area24Widget44 title="Area24Widget44" />
    <Area24Widget245 title="Area24Widget245" />
    <Area24Widget246 title="Area24Widget246" />
    <Area24Widget101 title="Area24Widget101" />
  </div>
</template>
