<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState13()
useHead({ title: `Kpis 13 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p13">
    <h1>Kpis page 13 ({{ count }})</h1>
    <KpisWidget243 title="KpisWidget243" />
    <KpisWidget54 title="KpisWidget54" />
    <KpisWidget43 title="KpisWidget43" />
    <KpisWidget166 title="KpisWidget166" />
    <KpisWidget170 title="KpisWidget170" />
    <KpisWidget36 title="KpisWidget36" />
  </div>
</template>
