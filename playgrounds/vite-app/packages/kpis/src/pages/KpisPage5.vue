<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState13()
onMounted(() => { document.title = `Kpis 5 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p5">
    <h1>Kpis page 5 ({{ count }})</h1>
    <KpisWidget57 title="KpisWidget57" />
    <KpisWidget45 title="KpisWidget45" />
    <KpisWidget110 title="KpisWidget110" />
    <KpisWidget19 title="KpisWidget19" />
    <KpisWidget101 title="KpisWidget101" />
  </div>
</template>

<style scoped>
.kpis-p5 { display: grid; gap: 23px; }
</style>
