<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState22()
useHead({ title: `Kpis 15 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p15">
    <h1>Kpis page 15 ({{ count }})</h1>
    <KpisWidget60 title="KpisWidget60" />
    <KpisWidget98 title="KpisWidget98" />
    <KpisWidget53 title="KpisWidget53" />
    <KpisWidget175 title="KpisWidget175" />
  </div>
</template>
