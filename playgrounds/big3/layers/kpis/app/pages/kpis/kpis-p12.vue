<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState14()
useHead({ title: `Kpis 12 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p12">
    <h1>Kpis page 12 ({{ count }})</h1>
    <KpisWidget212 title="KpisWidget212" />
    <KpisWidget54 title="KpisWidget54" />
    <KpisWidget115 title="KpisWidget115" />
    <KpisWidget85 title="KpisWidget85" />
    <KpisWidget41 title="KpisWidget41" />
    <KpisWidget36 title="KpisWidget36" />
  </div>
</template>
