<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State18()
useHead({ title: `Area16 15 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p15">
    <h1>Area16 page 15 ({{ count }})</h1>
    <Area16Widget141 title="Area16Widget141" />
    <Area16Widget81 title="Area16Widget81" />
    <Area16Widget181 title="Area16Widget181" />
    <Area16Widget40 title="Area16Widget40" />
    <Area16Widget72 title="Area16Widget72" />
    <Area16Widget233 title="Area16Widget233" />
  </div>
</template>
