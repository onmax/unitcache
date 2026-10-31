<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState8()
useHead({ title: `Kpis 2 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p2">
    <h1>Kpis page 2 ({{ count }})</h1>
    <KpisWidget110 title="KpisWidget110" />
    <KpisWidget183 title="KpisWidget183" />
    <KpisWidget163 title="KpisWidget163" />
    <KpisWidget152 title="KpisWidget152" />
    <KpisWidget18 title="KpisWidget18" />
  </div>
</template>
