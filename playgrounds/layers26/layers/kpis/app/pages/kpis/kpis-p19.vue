<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState18()
useHead({ title: `Kpis 19 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p19">
    <h1>Kpis page 19 ({{ count }})</h1>
    <KpisWidget113 title="KpisWidget113" />
    <KpisWidget184 title="KpisWidget184" />
    <KpisWidget166 title="KpisWidget166" />
    <KpisWidget39 title="KpisWidget39" />
    <KpisWidget74 title="KpisWidget74" />
  </div>
</template>
