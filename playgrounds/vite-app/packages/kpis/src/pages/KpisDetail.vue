<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState9()
onMounted(() => { document.title = `Kpis 1 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p1">
    <h1>Kpis page 1 ({{ count }})</h1>
    <KpisWidget16 title="KpisWidget16" />
    <KpisWidget86 title="KpisWidget86" />
    <KpisWidget8 title="KpisWidget8" />
    <KpisWidget163 title="KpisWidget163" />
    <KpisWidget69 title="KpisWidget69" />
  </div>
</template>

<style scoped>
.kpis-p1 { display: grid; gap: 19px; }
</style>
