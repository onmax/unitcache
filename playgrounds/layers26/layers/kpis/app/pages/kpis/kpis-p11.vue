<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState20()
useHead({ title: `Kpis 11 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p11">
    <h1>Kpis page 11 ({{ count }})</h1>
    <KpisWidget165 title="KpisWidget165" />
    <KpisWidget48 title="KpisWidget48" />
    <KpisWidget81 title="KpisWidget81" />
    <KpisWidget70 title="KpisWidget70" />
    <KpisWidget8 title="KpisWidget8" />
    <KpisWidget150 title="KpisWidget150" />
  </div>
</template>
