<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState8()
useHead({ title: `Kpis 16 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p16">
    <h1>Kpis page 16 ({{ count }})</h1>
    <KpisWidget71 title="KpisWidget71" />
    <KpisWidget89 title="KpisWidget89" />
    <KpisWidget161 title="KpisWidget161" />
    <KpisWidget174 title="KpisWidget174" />
    <KpisWidget190 title="KpisWidget190" />
    <KpisWidget119 title="KpisWidget119" />
  </div>
</template>
