<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState5()
onMounted(() => { document.title = `Kpis 11 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p11">
    <h1>Kpis page 11 ({{ count }})</h1>
    <KpisWidget32 title="KpisWidget32" />
    <KpisWidget127 title="KpisWidget127" />
    <KpisWidget125 title="KpisWidget125" />
    <KpisWidget79 title="KpisWidget79" />
    <KpisWidget61 title="KpisWidget61" />
    <KpisWidget103 title="KpisWidget103" />
  </div>
</template>

<style scoped>
.kpis-p11 { display: grid; gap: 10px; }
</style>
