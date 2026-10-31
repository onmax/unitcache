<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State5()
useHead({ title: `Area16 10 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p10">
    <h1>Area16 page 10 ({{ count }})</h1>
    <Area16Widget15 title="Area16Widget15" />
    <Area16Widget185 title="Area16Widget185" />
    <Area16Widget243 title="Area16Widget243" />
    <Area16Widget179 title="Area16Widget179" />
    <Area16Widget70 title="Area16Widget70" />
    <Area16Widget25 title="Area16Widget25" />
  </div>
</template>
