<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState4()
useHead({ title: `Kpis 10 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p10">
    <h1>Kpis page 10 ({{ count }})</h1>
    <KpisWidget5 title="KpisWidget5" />
    <KpisWidget63 title="KpisWidget63" />
    <KpisWidget148 title="KpisWidget148" />
    <KpisWidget97 title="KpisWidget97" />
  </div>
</template>
