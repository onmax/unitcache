<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State25()
useHead({ title: `Area24 2 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p2">
    <h1>Area24 page 2 ({{ count }})</h1>
    <Area24Widget162 title="Area24Widget162" />
    <Area24Widget184 title="Area24Widget184" />
    <Area24Widget72 title="Area24Widget72" />
  </div>
</template>
