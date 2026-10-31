<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState29()
useHead({ title: `Kpis 7 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p7">
    <h1>Kpis page 7 ({{ count }})</h1>
    <KpisWidget139 title="KpisWidget139" />
    <KpisWidget218 title="KpisWidget218" />
    <KpisWidget249 title="KpisWidget249" />
    <KpisWidget118 title="KpisWidget118" />
  </div>
</template>
