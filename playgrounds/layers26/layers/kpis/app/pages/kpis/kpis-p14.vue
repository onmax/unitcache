<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState22()
useHead({ title: `Kpis 14 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p14">
    <h1>Kpis page 14 ({{ count }})</h1>
    <KpisWidget147 title="KpisWidget147" />
    <KpisWidget95 title="KpisWidget95" />
    <KpisWidget167 title="KpisWidget167" />
  </div>
</template>
