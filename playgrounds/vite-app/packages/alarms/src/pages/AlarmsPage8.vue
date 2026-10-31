<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState4()
onMounted(() => { document.title = `Alarms 8 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p8">
    <h1>Alarms page 8 ({{ count }})</h1>
    <AlarmsWidget135 title="AlarmsWidget135" />
    <AlarmsWidget97 title="AlarmsWidget97" />
    <AlarmsWidget30 title="AlarmsWidget30" />
  </div>
</template>

<style scoped>
.alarms-p8 { display: grid; gap: 21px; }
</style>
