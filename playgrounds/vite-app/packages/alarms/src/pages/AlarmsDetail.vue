<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState17()
onMounted(() => { document.title = `Alarms 1 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p1">
    <h1>Alarms page 1 ({{ count }})</h1>
    <AlarmsWidget5 title="AlarmsWidget5" />
    <AlarmsWidget73 title="AlarmsWidget73" />
    <AlarmsWidget129 title="AlarmsWidget129" />
    <AlarmsWidget88 title="AlarmsWidget88" />
    <AlarmsWidget46 title="AlarmsWidget46" />
    <AlarmsWidget121 title="AlarmsWidget121" />
  </div>
</template>

<style scoped>
.alarms-p1 { display: grid; gap: 22px; }
</style>
