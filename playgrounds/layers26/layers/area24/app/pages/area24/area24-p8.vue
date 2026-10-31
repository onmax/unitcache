<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State7()
useHead({ title: `Area24 8 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p8">
    <h1>Area24 page 8 ({{ count }})</h1>
    <Area24Widget213 title="Area24Widget213" />
    <Area24Widget178 title="Area24Widget178" />
    <Area24Widget201 title="Area24Widget201" />
  </div>
</template>
