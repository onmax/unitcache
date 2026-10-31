<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState4()
onMounted(() => { document.title = `Kpis 8 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p8">
    <h1>Kpis page 8 ({{ count }})</h1>
    <KpisWidget158 title="KpisWidget158" />
    <KpisWidget115 title="KpisWidget115" />
    <KpisWidget73 title="KpisWidget73" />
    <KpisWidget38 title="KpisWidget38" />
  </div>
</template>

<style scoped>
.kpis-p8 { display: grid; gap: 9px; }
</style>
