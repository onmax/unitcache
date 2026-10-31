<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState14()
onMounted(() => { document.title = `Alarms 10 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p10">
    <h1>Alarms page 10 ({{ count }})</h1>
    <AlarmsWidget145 title="AlarmsWidget145" />
    <AlarmsWidget142 title="AlarmsWidget142" />
    <AlarmsWidget0 title="AlarmsWidget0" />
  </div>
</template>

<style scoped>
.alarms-p10 { display: grid; gap: 24px; }
</style>
