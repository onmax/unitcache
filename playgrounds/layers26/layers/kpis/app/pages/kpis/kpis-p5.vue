<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState11()
useHead({ title: `Kpis 5 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p5">
    <h1>Kpis page 5 ({{ count }})</h1>
    <KpisWidget80 title="KpisWidget80" />
    <KpisWidget43 title="KpisWidget43" />
    <KpisWidget234 title="KpisWidget234" />
    <KpisWidget16 title="KpisWidget16" />
  </div>
</template>
