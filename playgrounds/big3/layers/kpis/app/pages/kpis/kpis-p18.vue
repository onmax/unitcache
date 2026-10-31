<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState22()
useHead({ title: `Kpis 18 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p18">
    <h1>Kpis page 18 ({{ count }})</h1>
    <KpisWidget70 title="KpisWidget70" />
    <KpisWidget52 title="KpisWidget52" />
    <KpisWidget69 title="KpisWidget69" />
    <KpisWidget91 title="KpisWidget91" />
    <KpisWidget107 title="KpisWidget107" />
    <KpisWidget144 title="KpisWidget144" />
  </div>
</template>
