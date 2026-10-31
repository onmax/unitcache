<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State11()
useHead({ title: `Area24 13 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p13">
    <h1>Area24 page 13 ({{ count }})</h1>
    <Area24Widget180 title="Area24Widget180" />
    <Area24Widget245 title="Area24Widget245" />
    <Area24Widget240 title="Area24Widget240" />
  </div>
</template>
