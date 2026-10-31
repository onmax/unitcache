<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State24()
useHead({ title: `Area16 8 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p8">
    <h1>Area16 page 8 ({{ count }})</h1>
    <Area16Widget114 title="Area16Widget114" />
    <Area16Widget147 title="Area16Widget147" />
    <Area16Widget5 title="Area16Widget5" />
    <Area16Widget35 title="Area16Widget35" />
    <Area16Widget54 title="Area16Widget54" />
    <Area16Widget237 title="Area16Widget237" />
  </div>
</template>
