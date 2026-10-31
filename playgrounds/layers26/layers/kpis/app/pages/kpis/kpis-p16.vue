<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState28()
useHead({ title: `Kpis 16 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p16">
    <h1>Kpis page 16 ({{ count }})</h1>
    <KpisWidget15 title="KpisWidget15" />
    <KpisWidget244 title="KpisWidget244" />
    <KpisWidget94 title="KpisWidget94" />
    <KpisWidget91 title="KpisWidget91" />
  </div>
</template>
