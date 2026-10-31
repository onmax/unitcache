<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState24()
useHead({ title: `Kpis 9 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p9">
    <h1>Kpis page 9 ({{ count }})</h1>
    <KpisWidget128 title="KpisWidget128" />
    <KpisWidget198 title="KpisWidget198" />
    <KpisWidget31 title="KpisWidget31" />
  </div>
</template>
