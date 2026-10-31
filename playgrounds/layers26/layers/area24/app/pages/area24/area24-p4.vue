<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area24-guard'] })
const route = useRoute()
const { count } = useArea24State10()
useHead({ title: `Area24 4 ${route.params.area24Id ?? ''}` })
</script>

<template>
  <div class="page area24-p4">
    <h1>Area24 page 4 ({{ count }})</h1>
    <Area24Widget107 title="Area24Widget107" />
    <Area24Widget190 title="Area24Widget190" />
    <Area24Widget161 title="Area24Widget161" />
    <Area24Widget230 title="Area24Widget230" />
    <Area24Widget182 title="Area24Widget182" />
  </div>
</template>
