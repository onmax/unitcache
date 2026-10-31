<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State0()
useHead({ title: `Area15 15 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p15">
    <h1>Area15 page 15 ({{ count }})</h1>
    <Area15Widget43 title="Area15Widget43" />
    <Area15Widget175 title="Area15Widget175" />
    <Area15Widget179 title="Area15Widget179" />
    <Area15Widget76 title="Area15Widget76" />
    <Area15Widget11 title="Area15Widget11" />
  </div>
</template>
