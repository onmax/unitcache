<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState4()
onMounted(() => { document.title = `Kpis 10 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p10">
    <h1>Kpis page 10 ({{ count }})</h1>
    <KpisWidget158 title="KpisWidget158" />
    <KpisWidget154 title="KpisWidget154" />
    <KpisWidget92 title="KpisWidget92" />
    <KpisWidget127 title="KpisWidget127" />
  </div>
</template>

<style scoped>
.kpis-p10 { display: grid; gap: 11px; }
</style>
