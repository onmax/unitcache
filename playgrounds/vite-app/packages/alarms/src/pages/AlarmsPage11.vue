<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState4()
onMounted(() => { document.title = `Alarms 11 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p11">
    <h1>Alarms page 11 ({{ count }})</h1>
    <AlarmsWidget152 title="AlarmsWidget152" />
    <AlarmsWidget5 title="AlarmsWidget5" />
    <AlarmsWidget64 title="AlarmsWidget64" />
    <AlarmsWidget25 title="AlarmsWidget25" />
    <AlarmsWidget123 title="AlarmsWidget123" />
  </div>
</template>

<style scoped>
.alarms-p11 { display: grid; gap: 17px; }
</style>
