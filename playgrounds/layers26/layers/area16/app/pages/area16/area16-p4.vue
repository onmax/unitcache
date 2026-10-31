<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State12()
useHead({ title: `Area16 4 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p4">
    <h1>Area16 page 4 ({{ count }})</h1>
    <Area16Widget109 title="Area16Widget109" />
    <Area16Widget10 title="Area16Widget10" />
    <Area16Widget134 title="Area16Widget134" />
    <Area16Widget166 title="Area16Widget166" />
  </div>
</template>
