<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState1()
onMounted(() => { document.title = `Alarms 2 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p2">
    <h1>Alarms page 2 ({{ count }})</h1>
    <AlarmsWidget21 title="AlarmsWidget21" />
    <AlarmsWidget132 title="AlarmsWidget132" />
    <AlarmsWidget61 title="AlarmsWidget61" />
    <AlarmsWidget67 title="AlarmsWidget67" />
    <AlarmsWidget161 title="AlarmsWidget161" />
  </div>
</template>

<style scoped>
.alarms-p2 { display: grid; gap: 14px; }
</style>
