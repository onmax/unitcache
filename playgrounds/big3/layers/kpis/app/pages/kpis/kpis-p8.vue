<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState14()
useHead({ title: `Kpis 8 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p8">
    <h1>Kpis page 8 ({{ count }})</h1>
    <KpisWidget96 title="KpisWidget96" />
    <KpisWidget141 title="KpisWidget141" />
    <KpisWidget192 title="KpisWidget192" />
    <KpisWidget109 title="KpisWidget109" />
    <KpisWidget162 title="KpisWidget162" />
    <KpisWidget32 title="KpisWidget32" />
  </div>
</template>
