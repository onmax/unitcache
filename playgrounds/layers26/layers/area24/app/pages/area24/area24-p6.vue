<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State8()
useHead({ title: `Area24 6 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p6">
    <h1>Area24 page 6 ({{ count }})</h1>
    <Area24Widget14 title="Area24Widget14" />
    <Area24Widget182 title="Area24Widget182" />
    <Area24Widget41 title="Area24Widget41" />
    <Area24Widget143 title="Area24Widget143" />
    <Area24Widget88 title="Area24Widget88" />
  </div>
</template>
