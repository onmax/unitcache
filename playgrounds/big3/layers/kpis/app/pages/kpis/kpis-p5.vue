<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState28()
useHead({ title: `Kpis 5 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p5">
    <h1>Kpis page 5 ({{ count }})</h1>
    <KpisWidget41 title="KpisWidget41" />
    <KpisWidget40 title="KpisWidget40" />
    <KpisWidget217 title="KpisWidget217" />
    <KpisWidget150 title="KpisWidget150" />
    <KpisWidget199 title="KpisWidget199" />
    <KpisWidget72 title="KpisWidget72" />
  </div>
</template>
