<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState5()
useHead({ title: `Kpis 4 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p4">
    <h1>Kpis page 4 ({{ count }})</h1>
    <KpisWidget113 title="KpisWidget113" />
    <KpisWidget135 title="KpisWidget135" />
    <KpisWidget139 title="KpisWidget139" />
    <KpisWidget133 title="KpisWidget133" />
  </div>
</template>
