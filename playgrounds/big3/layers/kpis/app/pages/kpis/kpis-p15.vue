<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState25()
useHead({ title: `Kpis 15 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p15">
    <h1>Kpis page 15 ({{ count }})</h1>
    <KpisWidget69 title="KpisWidget69" />
    <KpisWidget240 title="KpisWidget240" />
    <KpisWidget191 title="KpisWidget191" />
    <KpisWidget139 title="KpisWidget139" />
    <KpisWidget10 title="KpisWidget10" />
  </div>
</template>
