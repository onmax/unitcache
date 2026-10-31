<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState0()
onMounted(() => { document.title = `Kpis 9 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p9">
    <h1>Kpis page 9 ({{ count }})</h1>
    <KpisWidget79 title="KpisWidget79" />
    <KpisWidget167 title="KpisWidget167" />
    <KpisWidget140 title="KpisWidget140" />
  </div>
</template>

<style scoped>
.kpis-p9 { display: grid; gap: 22px; }
</style>
