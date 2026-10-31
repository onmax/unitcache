<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State12()
useHead({ title: `Area15 4 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p4">
    <h1>Area15 page 4 ({{ count }})</h1>
    <Area15Widget129 title="Area15Widget129" />
    <Area15Widget217 title="Area15Widget217" />
    <Area15Widget105 title="Area15Widget105" />
    <Area15Widget27 title="Area15Widget27" />
    <Area15Widget113 title="Area15Widget113" />
    <Area15Widget58 title="Area15Widget58" />
  </div>
</template>
