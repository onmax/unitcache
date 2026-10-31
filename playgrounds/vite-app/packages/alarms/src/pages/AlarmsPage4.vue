<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState1()
onMounted(() => { document.title = `Alarms 4 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p4">
    <h1>Alarms page 4 ({{ count }})</h1>
    <AlarmsWidget89 title="AlarmsWidget89" />
    <AlarmsWidget28 title="AlarmsWidget28" />
    <AlarmsWidget86 title="AlarmsWidget86" />
    <AlarmsWidget95 title="AlarmsWidget95" />
  </div>
</template>

<style scoped>
.alarms-p4 { display: grid; gap: 11px; }
</style>
