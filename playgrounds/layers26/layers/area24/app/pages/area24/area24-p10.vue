<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State4()
useHead({ title: `Area24 10 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p10">
    <h1>Area24 page 10 ({{ count }})</h1>
    <Area24Widget137 title="Area24Widget137" />
    <Area24Widget34 title="Area24Widget34" />
    <Area24Widget116 title="Area24Widget116" />
    <Area24Widget189 title="Area24Widget189" />
  </div>
</template>
