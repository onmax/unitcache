<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState9()
onMounted(() => { document.title = `Alarms 5 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p5">
    <h1>Alarms page 5 ({{ count }})</h1>
    <AlarmsWidget138 title="AlarmsWidget138" />
    <AlarmsWidget117 title="AlarmsWidget117" />
    <AlarmsWidget65 title="AlarmsWidget65" />
    <AlarmsWidget5 title="AlarmsWidget5" />
    <AlarmsWidget95 title="AlarmsWidget95" />
    <AlarmsWidget120 title="AlarmsWidget120" />
  </div>
</template>

<style scoped>
.alarms-p5 { display: grid; gap: 24px; }
</style>
