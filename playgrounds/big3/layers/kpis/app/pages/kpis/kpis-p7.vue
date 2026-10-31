<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState23()
useHead({ title: `Kpis 7 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p7">
    <h1>Kpis page 7 ({{ count }})</h1>
    <KpisWidget217 title="KpisWidget217" />
    <KpisWidget136 title="KpisWidget136" />
    <KpisWidget123 title="KpisWidget123" />
    <KpisWidget112 title="KpisWidget112" />
    <KpisWidget12 title="KpisWidget12" />
    <KpisWidget103 title="KpisWidget103" />
  </div>
</template>
