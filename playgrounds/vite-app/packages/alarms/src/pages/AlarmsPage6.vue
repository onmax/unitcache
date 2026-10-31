<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState18()
onMounted(() => { document.title = `Alarms 6 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p6">
    <h1>Alarms page 6 ({{ count }})</h1>
    <AlarmsWidget128 title="AlarmsWidget128" />
    <AlarmsWidget73 title="AlarmsWidget73" />
    <AlarmsWidget34 title="AlarmsWidget34" />
    <AlarmsWidget139 title="AlarmsWidget139" />
  </div>
</template>

<style scoped>
.alarms-p6 { display: grid; gap: 23px; }
</style>
