<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState17()
useHead({ title: `Kpis 13 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p13">
    <h1>Kpis page 13 ({{ count }})</h1>
    <KpisWidget221 title="KpisWidget221" />
    <KpisWidget148 title="KpisWidget148" />
    <KpisWidget132 title="KpisWidget132" />
    <KpisWidget126 title="KpisWidget126" />
  </div>
</template>
