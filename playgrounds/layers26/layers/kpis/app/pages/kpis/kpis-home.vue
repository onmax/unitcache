<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState14()
useHead({ title: `Kpis 0 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p0">
    <h1>Kpis page 0 ({{ count }})</h1>
    <KpisWidget50 title="KpisWidget50" />
    <KpisWidget79 title="KpisWidget79" />
    <KpisWidget237 title="KpisWidget237" />
    <KpisWidget199 title="KpisWidget199" />
  </div>
</template>
