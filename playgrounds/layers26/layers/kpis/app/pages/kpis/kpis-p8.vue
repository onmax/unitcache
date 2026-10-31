<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState15()
useHead({ title: `Kpis 8 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p8">
    <h1>Kpis page 8 ({{ count }})</h1>
    <KpisWidget54 title="KpisWidget54" />
    <KpisWidget21 title="KpisWidget21" />
    <KpisWidget41 title="KpisWidget41" />
    <KpisWidget23 title="KpisWidget23" />
  </div>
</template>
