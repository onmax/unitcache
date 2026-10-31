<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState29()
useHead({ title: `Kpis 14 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p14">
    <h1>Kpis page 14 ({{ count }})</h1>
    <KpisWidget225 title="KpisWidget225" />
    <KpisWidget87 title="KpisWidget87" />
    <KpisWidget194 title="KpisWidget194" />
    <KpisWidget76 title="KpisWidget76" />
  </div>
</template>
