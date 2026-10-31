<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State25()
useHead({ title: `Area16 11 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p11">
    <h1>Area16 page 11 ({{ count }})</h1>
    <Area16Widget230 title="Area16Widget230" />
    <Area16Widget215 title="Area16Widget215" />
    <Area16Widget123 title="Area16Widget123" />
  </div>
</template>
