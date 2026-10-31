<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState11()
onMounted(() => { document.title = `Kpis 4 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p4">
    <h1>Kpis page 4 ({{ count }})</h1>
    <KpisWidget68 title="KpisWidget68" />
    <KpisWidget61 title="KpisWidget61" />
    <KpisWidget114 title="KpisWidget114" />
  </div>
</template>

<style scoped>
.kpis-p4 { display: grid; gap: 11px; }
</style>
