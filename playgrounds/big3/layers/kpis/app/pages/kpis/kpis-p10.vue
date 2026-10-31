<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState15()
useHead({ title: `Kpis 10 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p10">
    <h1>Kpis page 10 ({{ count }})</h1>
    <KpisWidget39 title="KpisWidget39" />
    <KpisWidget197 title="KpisWidget197" />
    <KpisWidget159 title="KpisWidget159" />
  </div>
</template>
