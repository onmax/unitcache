<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState13()
onMounted(() => { document.title = `Kpis 2 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p2">
    <h1>Kpis page 2 ({{ count }})</h1>
    <KpisWidget110 title="KpisWidget110" />
    <KpisWidget76 title="KpisWidget76" />
    <KpisWidget82 title="KpisWidget82" />
    <KpisWidget122 title="KpisWidget122" />
  </div>
</template>

<style scoped>
.kpis-p2 { display: grid; gap: 12px; }
</style>
