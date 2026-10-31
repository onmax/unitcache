<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State6()
useHead({ title: `Area24 7 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p7">
    <h1>Area24 page 7 ({{ count }})</h1>
    <Area24Widget8 title="Area24Widget8" />
    <Area24Widget9 title="Area24Widget9" />
    <Area24Widget123 title="Area24Widget123" />
    <Area24Widget172 title="Area24Widget172" />
  </div>
</template>
