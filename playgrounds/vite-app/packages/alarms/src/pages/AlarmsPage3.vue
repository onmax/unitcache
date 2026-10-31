<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState9()
onMounted(() => { document.title = `Alarms 3 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p3">
    <h1>Alarms page 3 ({{ count }})</h1>
    <AlarmsWidget54 title="AlarmsWidget54" />
    <AlarmsWidget45 title="AlarmsWidget45" />
    <AlarmsWidget121 title="AlarmsWidget121" />
  </div>
</template>

<style scoped>
.alarms-p3 { display: grid; gap: 16px; }
</style>
