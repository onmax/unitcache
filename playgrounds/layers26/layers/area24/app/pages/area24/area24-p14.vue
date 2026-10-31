<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State26()
useHead({ title: `Area24 14 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p14">
    <h1>Area24 page 14 ({{ count }})</h1>
    <Area24Widget212 title="Area24Widget212" />
    <Area24Widget100 title="Area24Widget100" />
    <Area24Widget20 title="Area24Widget20" />
    <Area24Widget99 title="Area24Widget99" />
    <Area24Widget4 title="Area24Widget4" />
    <Area24Widget209 title="Area24Widget209" />
  </div>
</template>
