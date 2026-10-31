<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState19()
useHead({ title: `Kpis 4 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p4">
    <h1>Kpis page 4 ({{ count }})</h1>
    <KpisWidget29 title="KpisWidget29" />
    <KpisWidget189 title="KpisWidget189" />
    <KpisWidget233 title="KpisWidget233" />
    <KpisWidget196 title="KpisWidget196" />
    <KpisWidget180 title="KpisWidget180" />
  </div>
</template>
