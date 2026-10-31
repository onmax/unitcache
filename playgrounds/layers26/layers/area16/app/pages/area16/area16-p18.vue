<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State18()
useHead({ title: `Area16 18 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p18">
    <h1>Area16 page 18 ({{ count }})</h1>
    <Area16Widget241 title="Area16Widget241" />
    <Area16Widget240 title="Area16Widget240" />
    <Area16Widget180 title="Area16Widget180" />
  </div>
</template>
