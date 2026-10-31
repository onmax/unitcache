<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState13()
onMounted(() => { document.title = `Kpis 6 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p6">
    <h1>Kpis page 6 ({{ count }})</h1>
    <KpisWidget97 title="KpisWidget97" />
    <KpisWidget94 title="KpisWidget94" />
    <KpisWidget166 title="KpisWidget166" />
  </div>
</template>

<style scoped>
.kpis-p6 { display: grid; gap: 11px; }
</style>
