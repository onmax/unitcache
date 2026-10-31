<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState10()
onMounted(() => { document.title = `Kpis 3 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p3">
    <h1>Kpis page 3 ({{ count }})</h1>
    <KpisWidget37 title="KpisWidget37" />
    <KpisWidget74 title="KpisWidget74" />
    <KpisWidget62 title="KpisWidget62" />
  </div>
</template>

<style scoped>
.kpis-p3 { display: grid; gap: 11px; }
</style>
