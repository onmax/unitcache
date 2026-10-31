<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState8()
useHead({ title: `Kpis 12 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p12">
    <h1>Kpis page 12 ({{ count }})</h1>
    <KpisWidget177 title="KpisWidget177" />
    <KpisWidget8 title="KpisWidget8" />
    <KpisWidget176 title="KpisWidget176" />
  </div>
</template>
