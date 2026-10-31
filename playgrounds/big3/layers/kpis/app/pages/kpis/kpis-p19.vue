<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState8()
useHead({ title: `Kpis 19 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p19">
    <h1>Kpis page 19 ({{ count }})</h1>
    <KpisWidget178 title="KpisWidget178" />
    <KpisWidget90 title="KpisWidget90" />
    <KpisWidget174 title="KpisWidget174" />
    <KpisWidget189 title="KpisWidget189" />
    <KpisWidget33 title="KpisWidget33" />
  </div>
</template>
