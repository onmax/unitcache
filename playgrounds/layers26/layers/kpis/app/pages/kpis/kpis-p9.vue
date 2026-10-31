<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState0()
useHead({ title: `Kpis 9 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p9">
    <h1>Kpis page 9 ({{ count }})</h1>
    <KpisWidget123 title="KpisWidget123" />
    <KpisWidget138 title="KpisWidget138" />
    <KpisWidget97 title="KpisWidget97" />
    <KpisWidget220 title="KpisWidget220" />
    <KpisWidget126 title="KpisWidget126" />
  </div>
</template>
