<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState12()
useHead({ title: `Kpis 3 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p3">
    <h1>Kpis page 3 ({{ count }})</h1>
    <KpisWidget12 title="KpisWidget12" />
    <KpisWidget228 title="KpisWidget228" />
    <KpisWidget151 title="KpisWidget151" />
    <KpisWidget67 title="KpisWidget67" />
    <KpisWidget102 title="KpisWidget102" />
    <KpisWidget98 title="KpisWidget98" />
  </div>
</template>
