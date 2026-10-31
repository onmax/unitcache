<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState10()
useHead({ title: `Kpis 0 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p0">
    <h1>Kpis page 0 ({{ count }})</h1>
    <KpisWidget101 title="KpisWidget101" />
    <KpisWidget192 title="KpisWidget192" />
    <KpisWidget58 title="KpisWidget58" />
    <KpisWidget180 title="KpisWidget180" />
    <KpisWidget236 title="KpisWidget236" />
    <KpisWidget200 title="KpisWidget200" />
  </div>
</template>
