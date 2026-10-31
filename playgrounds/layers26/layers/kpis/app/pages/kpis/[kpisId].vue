<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState6()
useHead({ title: `Kpis 1 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p1">
    <h1>Kpis page 1 ({{ count }})</h1>
    <KpisWidget106 title="KpisWidget106" />
    <KpisWidget99 title="KpisWidget99" />
    <KpisWidget14 title="KpisWidget14" />
    <KpisWidget164 title="KpisWidget164" />
    <KpisWidget76 title="KpisWidget76" />
  </div>
</template>
