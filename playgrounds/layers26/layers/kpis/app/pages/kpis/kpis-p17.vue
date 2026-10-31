<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState14()
useHead({ title: `Kpis 17 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p17">
    <h1>Kpis page 17 ({{ count }})</h1>
    <KpisWidget16 title="KpisWidget16" />
    <KpisWidget165 title="KpisWidget165" />
    <KpisWidget52 title="KpisWidget52" />
    <KpisWidget18 title="KpisWidget18" />
  </div>
</template>
