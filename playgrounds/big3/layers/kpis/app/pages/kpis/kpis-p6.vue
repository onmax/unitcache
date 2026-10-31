<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState20()
useHead({ title: `Kpis 6 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p6">
    <h1>Kpis page 6 ({{ count }})</h1>
    <KpisWidget57 title="KpisWidget57" />
    <KpisWidget88 title="KpisWidget88" />
    <KpisWidget73 title="KpisWidget73" />
    <KpisWidget213 title="KpisWidget213" />
    <KpisWidget227 title="KpisWidget227" />
  </div>
</template>
