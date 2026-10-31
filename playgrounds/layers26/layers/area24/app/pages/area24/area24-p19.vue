<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State1()
useHead({ title: `Area24 19 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p19">
    <h1>Area24 page 19 ({{ count }})</h1>
    <Area24Widget14 title="Area24Widget14" />
    <Area24Widget29 title="Area24Widget29" />
    <Area24Widget175 title="Area24Widget175" />
    <Area24Widget182 title="Area24Widget182" />
  </div>
</template>
