<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State12()
useHead({ title: `Area16 2 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p2">
    <h1>Area16 page 2 ({{ count }})</h1>
    <Area16Widget220 title="Area16Widget220" />
    <Area16Widget92 title="Area16Widget92" />
    <Area16Widget126 title="Area16Widget126" />
    <Area16Widget203 title="Area16Widget203" />
  </div>
</template>
