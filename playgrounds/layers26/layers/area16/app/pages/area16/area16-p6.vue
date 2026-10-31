<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State9()
useHead({ title: `Area16 6 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p6">
    <h1>Area16 page 6 ({{ count }})</h1>
    <Area16Widget111 title="Area16Widget111" />
    <Area16Widget23 title="Area16Widget23" />
    <Area16Widget234 title="Area16Widget234" />
    <Area16Widget161 title="Area16Widget161" />
    <Area16Widget166 title="Area16Widget166" />
    <Area16Widget246 title="Area16Widget246" />
  </div>
</template>
