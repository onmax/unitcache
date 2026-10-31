<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState16()
useHead({ title: `Kpis 1 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p1">
    <h1>Kpis page 1 ({{ count }})</h1>
    <KpisWidget41 title="KpisWidget41" />
    <KpisWidget166 title="KpisWidget166" />
    <KpisWidget14 title="KpisWidget14" />
    <KpisWidget77 title="KpisWidget77" />
  </div>
</template>
