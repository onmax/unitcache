<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State27()
useHead({ title: `Area16 7 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p7">
    <h1>Area16 page 7 ({{ count }})</h1>
    <Area16Widget243 title="Area16Widget243" />
    <Area16Widget193 title="Area16Widget193" />
    <Area16Widget0 title="Area16Widget0" />
    <Area16Widget91 title="Area16Widget91" />
    <Area16Widget150 title="Area16Widget150" />
    <Area16Widget107 title="Area16Widget107" />
  </div>
</template>
