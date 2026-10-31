<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State9()
useHead({ title: `Area24 9 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p9">
    <h1>Area24 page 9 ({{ count }})</h1>
    <Area24Widget163 title="Area24Widget163" />
    <Area24Widget214 title="Area24Widget214" />
    <Area24Widget225 title="Area24Widget225" />
    <Area24Widget33 title="Area24Widget33" />
  </div>
</template>
