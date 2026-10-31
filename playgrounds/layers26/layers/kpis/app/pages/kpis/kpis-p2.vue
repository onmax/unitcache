<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState25()
useHead({ title: `Kpis 2 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p2">
    <h1>Kpis page 2 ({{ count }})</h1>
    <KpisWidget47 title="KpisWidget47" />
    <KpisWidget244 title="KpisWidget244" />
    <KpisWidget161 title="KpisWidget161" />
  </div>
</template>
