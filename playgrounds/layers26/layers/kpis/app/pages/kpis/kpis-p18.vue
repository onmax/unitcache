<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState29()
useHead({ title: `Kpis 18 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p18">
    <h1>Kpis page 18 ({{ count }})</h1>
    <KpisWidget126 title="KpisWidget126" />
    <KpisWidget173 title="KpisWidget173" />
    <KpisWidget33 title="KpisWidget33" />
    <KpisWidget175 title="KpisWidget175" />
  </div>
</template>
