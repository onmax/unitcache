<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State12()
useHead({ title: `Area15 13 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p13">
    <h1>Area15 page 13 ({{ count }})</h1>
    <Area15Widget160 title="Area15Widget160" />
    <Area15Widget144 title="Area15Widget144" />
    <Area15Widget35 title="Area15Widget35" />
    <Area15Widget63 title="Area15Widget63" />
  </div>
</template>
