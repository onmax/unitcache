<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState2()
onMounted(() => { document.title = `Alarms 7 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p7">
    <h1>Alarms page 7 ({{ count }})</h1>
    <AlarmsWidget46 title="AlarmsWidget46" />
    <AlarmsWidget108 title="AlarmsWidget108" />
    <AlarmsWidget123 title="AlarmsWidget123" />
    <AlarmsWidget95 title="AlarmsWidget95" />
    <AlarmsWidget153 title="AlarmsWidget153" />
  </div>
</template>

<style scoped>
.alarms-p7 { display: grid; gap: 17px; }
</style>
