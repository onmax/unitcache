<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState20()
useHead({ title: `Kpis 17 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p17">
    <h1>Kpis page 17 ({{ count }})</h1>
    <KpisWidget44 title="KpisWidget44" />
    <KpisWidget214 title="KpisWidget214" />
    <KpisWidget163 title="KpisWidget163" />
    <KpisWidget20 title="KpisWidget20" />
    <KpisWidget187 title="KpisWidget187" />
    <KpisWidget176 title="KpisWidget176" />
  </div>
</template>
