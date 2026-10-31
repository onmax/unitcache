<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState9()
useHead({ title: `Kpis 3 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p3">
    <h1>Kpis page 3 ({{ count }})</h1>
    <KpisWidget10 title="KpisWidget10" />
    <KpisWidget6 title="KpisWidget6" />
    <KpisWidget185 title="KpisWidget185" />
    <KpisWidget166 title="KpisWidget166" />
    <KpisWidget65 title="KpisWidget65" />
  </div>
</template>
