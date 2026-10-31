<script setup lang="ts">

const route = useRoute()
const { count } = useKpisState3()
onMounted(() => { document.title = `Kpis 7 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p7">
    <h1>Kpis page 7 ({{ count }})</h1>
    <KpisWidget118 title="KpisWidget118" />
    <KpisWidget20 title="KpisWidget20" />
    <KpisWidget81 title="KpisWidget81" />
  </div>
</template>

<style scoped>
.kpis-p7 { display: grid; gap: 21px; }
</style>
