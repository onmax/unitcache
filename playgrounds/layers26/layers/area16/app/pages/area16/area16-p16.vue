<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State15()
useHead({ title: `Area16 16 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p16">
    <h1>Area16 page 16 ({{ count }})</h1>
    <Area16Widget5 title="Area16Widget5" />
    <Area16Widget73 title="Area16Widget73" />
    <Area16Widget108 title="Area16Widget108" />
  </div>
</template>
