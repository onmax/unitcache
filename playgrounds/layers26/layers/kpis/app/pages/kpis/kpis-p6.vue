<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState2()
useHead({ title: `Kpis 6 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p6">
    <h1>Kpis page 6 ({{ count }})</h1>
    <KpisWidget204 title="KpisWidget204" />
    <KpisWidget181 title="KpisWidget181" />
    <KpisWidget188 title="KpisWidget188" />
    <KpisWidget220 title="KpisWidget220" />
  </div>
</template>
